import React, { Component } from 'react';
import { View, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import { Header, Left, Button, Body, Title, Text, Footer, Icon, Card } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import Http from '../../../helpers/http';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SliderImages from './SliderImages';

class DataDonationScreen extends Component {
    state={
        imagesLoad: false,
        loadingBtnDonarAhora:false,
        imagesDonate : [],
        ImagesToSendApi:[],
        disableBtnDonarAhora:true,
        bgColorFooter:false,
        showBtnDeletePhotos:false
    }

    goSelectLocation = () =>{
        this.props.navigation.goBack()
    }

    finishDonate =  async () =>{
        this.setState({loadingBtnDonarAhora:true, disableBtnDonarAhora:true})
        let data = await this.getDataToNewDonation()
            //data.url_image = this.state.ImagesToSendApi[0]
            //data.id_state_donation = 1
        let frm = new FormData()
        frm.append('name', data.name)
        frm.append('description',data.description)
        frm.append('quantity',data.quantity)
        frm.append('observation',data.observation)
        frm.append('id_category',data.id_category)
        frm.append('id_user',data.id_user)
        frm.append('id_locality',data.id_locality),
        frm.append('id_state_product',data.id_state_product)
        frm.append('id_state_donation',1)
        frm.append('token',data.token)
        frm.append('cantImages', Number(this.state.ImagesToSendApi.length))
        this.state.ImagesToSendApi.forEach((img, index) =>{
            frm.append(`url_image_${index+1}`, {type:img.mime, uri:img.path, name:`imageDonation_${index+1}.jpg`} )        
        })
        //frm.append('url_image', {type: this.state.ImagesToSendApi[0].mime, uri:this.state.ImagesToSendApi[0].path, name:'imageDonation.jpg' } )    
        const resource = '/products'
        //const createDonation = await Http.instance.post(resource, JSON.stringify(data))
        const createDonation = await Http.instance.post(resource, frm)
        if(createDonation.Message === 'creado'){
            this.setState({loadingBtnDonarAhora:false})
            this.props.navigation.navigate('Home')
            Alert.alert(
                "FELICITACIONES!",
                "Su donación se ha publicado correctamente.!",
                [ {text: "OK"} ],
                {cancelable: true}
            ); 
        }        
    }

    selectImagesGalery = () => {
        let imagesDonate = [],
            ImagesToSendApi = []
        ImagePicker.openPicker({
                    multiple: true
                }).then(images => {
                    images?.map(img => {
                        imagesDonate.push(img.path)
                        ImagesToSendApi.push(img)
                    })
                    this.setState({imagesDonate, ImagesToSendApi, imagesLoad:true, bgColorFooter:true, disableBtnDonarAhora:false, showBtnDeletePhotos:true })
                });
    }

    selectImageCamera = () => {
        let imagesDonate = [],
            ImagesToSendApi = []
        ImagePicker.openCamera  ({
                    width: 300,
                    height: 400
                }).then(image => {
                        imagesDonate.push(image.path)
                        ImagesToSendApi.push(image)
                        this.setState({imagesDonate, ImagesToSendApi, imagesLoad:true, bgColorFooter:true, disableBtnDonarAhora:false, showBtnDeletePhotos:true})
                });
    }

    cleanPhotos = () => {
        this.setState({imagesDonate:[], ImagesToSendApi:[], imagesLoad:false, bgColorFooter:false, disableBtnDonarAhora:true, showBtnDeletePhotos:false})
    }

    getDataToNewDonation = async () => {
        try {
            let idCategory = await AsyncStorage.getItem('idCategory'),
                dataDonation = await AsyncStorage.getItem('dataDonation')
                dataDonation = (dataDonation !== null) ? JSON.parse(dataDonation) : null,
                idLocation = await AsyncStorage.getItem('idLocation'),
                token= await AsyncStorage.getItem('token'),
                idUser= await AsyncStorage.getItem('idUser')
                                   
            let objNewDonation = {
                name:dataDonation.titulo,
                description:dataDonation.descripcion,
                quantity:dataDonation.cantidad,
                observation:dataDonation.observaciones,
                id_category:Number(idCategory),
                id_user:Number(idUser),
                id_locality:Number(idLocation),
                id_state_product: (dataDonation.estado === 'Nuevo') ? 1 : 2,
                token 
            }
            return objNewDonation
        } catch(e) {
            console.log(`Error obteniendo las keys para la nueva donación ${e}`)
        }   
    }

    render(){
        return(
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                            <Left>
                                <Button transparent onPress={this.goSelectLocation}>
                                <Icon_ name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                                </Button>
                            </Left>
                            <Body>
                                <Title style={styles.textHeader}>Seleccionar fotos</Title>
                            </Body>
                        </Header>
                        <View style={styles.cardBackground}>
                            
                            { !this.state.imagesLoad ? <Image source={require('../../../assets/img/undraw_moments.png')} style={{height: 300, width: 300}}/>
                                                     : <SliderImages dataImages={this.state.imagesDonate}/>
                            }

                                                       
                            { this.state.showBtnDeletePhotos    ?   <Card style={{justifyContent:'center',alignItems:'center',flexDirection:'row',height:38, borderRadius:10, borderColor:'red', borderBottomColor: 'red', backgroundColor:'#ff6584', borderBottomWidth:3, marginTop:35}}>       
                                                                        <Icon active name='trash-outline' style={{fontSize:22, marginLeft:20, color:'#fff'}} />
                                                                        <Text style={{color:'#fff', fontSize:18, marginLeft:10, marginRight:20}} onPress={()=> this.cleanPhotos()} >Eliminar fotos</Text>
                                                                    </Card>
                                                                :   null  
                            }
                            <View style={{justifyContent:'space-evenly', flexDirection:'row', marginTop:30}}>
                                <Card style={ [styles.btn, { borderBottomColor: '#243949'}] }>
                                    <Icon active name='camera-outline' style={{fontSize:25, marginLeft:20}} />
                                    <Text style={{color:'#243949', fontSize:22, marginLeft:10, marginRight:20, fontWeight:'bold'}} onPress={()=> this.selectImageCamera()} >Cámara</Text>
                                </Card>
                                <Card style={ [styles.btn, { borderBottomColor: '#243949'}] }>
                                    <Icon active name='image-outline' style={{fontSize:25, marginLeft:20}} />
                                    <Text style={{color:'#243949', fontSize:22, marginLeft:10, marginRight:20, fontWeight:'bold'}} onPress={()=> this.selectImagesGalery()}>Galería</Text>
                                </Card> 
                            </View>  

                        </View>
                            <Footer style={{backgroundColor: this.state.bgColorFooter ? "#00bfa6" : "#86cbbd" , borderTopColor:"#243949",borderTopWidth:3}}>
                                <Button transparent onPress={this.finishDonate} disabled={this.state.disableBtnDonarAhora}>
                                    <Text style={{color:'#fff',fontWeight:'bold',fontSize: 15}}>Donar ahora!</Text>
                                    {   this.state.loadingBtnDonarAhora && <ActivityIndicator size="large" color="#243949" />  }
                                </Button>
                            </Footer>   
                    </View>
                </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent:'center'
    },
    container: {
      flex: 1, 
    },
    textHeader:{
        fontSize:20,
        marginTop:20
    },
    iconHeader:{
        marginTop:20
    },
    cardBackground: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "white",
        marginTop:40,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:20,
        marginLeft:10,
        marginRight:5,
        height:45,
        borderRadius:10,
        borderColor:'#243949',
        borderBottomWidth:3
    }
});

export default DataDonationScreen;