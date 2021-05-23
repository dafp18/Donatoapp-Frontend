import React, { Component,createRef } from 'react';
import { View, ActivityIndicator, ScrollView, StyleSheet, Alert, Pressable, Dimensions} from 'react-native';
import { Header, Card, CardItem, Text, Button, Icon, Left, Body, Title, Textarea, Label, Item, Input, List, ListItem } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../../helpers/http';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from "react-native-actions-sheet";

import SliderImages from '../../Donations/NewDonate/SliderImages';

const actionSheetRef = createRef();
class EditDonationScreen extends Component {
    state={
        disableBtnLoQuiero:false,
        loading:false,
        loadingData:true,
        id:null,
        imagesDonate:[],
        ImagesToSendApi:[],
        title:null,
        category:null,
        description: null,
        observation:null,
        stateName:null,
        quantity:null,
        locality:null,
        idUserLogged:null,
        data:[],
        typeData:null,
        disabledBtnSave:false,
        idNewCategory:null        
    }
    
    componentDidMount (){
        this.getIdUserLogged()
        this.getDonationById()
    }
    
    getIdUserLogged = async () => {
        try {
            let idUserLogged = Number(await AsyncStorage.getItem('idUser'))
            this.setState({idUserLogged})
        } catch(e) {
            console.log(`Error obteniendo la key idUser para el detalle donacion ${e}`)
        }   
    }

    getDonationById = async () => {

        let id = this.props.route.params,
            imagesDonate = []
        const resource = `/products/${id}`
        const donation = await Http.instance.get(resource)
        let handleStringImages = donation.url_image.split('|')
        handleStringImages?.map(img_url =>{
            if(img_url !== ''){ imagesDonate.push(Http.instance.BASE_URL_IMGS+img_url) }  
        })
        this.setState({imagesDonate, id:donation.id, title:donation.name, category:donation.id_category,
                       description: donation.description, observation:donation.observation, stateName: donation.id_state_product,
                       quantity:donation.quantity.toString(), locality: donation.id_locality, loadingData:false  
                    })
                 
    }

    getCategoriesList = async () =>{
        const resource = '/categories'
        const data = await Http.instance.get(resource)
        this.setState({data,typeData:'categorias'})
        actionSheetRef.current?.show()
    }

    getStatusProductList = () =>{
        const data = [
            {id:1,name:'Nuevo'},
            {id:2,name:'Usado'},
        ]
        this.setState({data, typeData:'estados'})
        actionSheetRef.current?.show()
    }

    validaForm = (text,label) => {    
        if((label === 'titulo')){
            this.setState({title:text})            
        }
        
        if((label === 'cantidad')){
            this.setState({quantity:text})    
        }

        if(label === 'observaciones'){
            this.setState({observation:text})
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
                    this.setState({imagesDonate, ImagesToSendApi})
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
                        this.setState({imagesDonate, ImagesToSendApi})
                });
    }

    onSelectedItem = (id, name) => {
        if(this.state.typeData === 'categorias'){
            this.setState({category:name, idNewCategory:id})
        }

        if(this.state.typeData === 'estados'){
            this.setState({stateName:name})
        }
        actionSheetRef.current?.hide();
    }

    updateDonation = async () => {
        this.setState({loading:true, disabledBtnSave:true})
        const resource = '/updateProduct'
        let frm = new FormData()
        frm.append('id', this.state.id)
        frm.append('name', this.state.title)
        frm.append('quantity',this.state.quantity)
        frm.append('observation',this.state.observation)
        if(this.state.idNewCategory){frm.append('id_category',this.state.idNewCategory)}
        frm.append('id_state_product',this.state.stateName === 'Nuevo' ? 1 : 2)
        if(this.state.ImagesToSendApi.length > 0){
            frm.append('cantImages', Number(this.state.ImagesToSendApi.length))
            this.state.ImagesToSendApi.forEach((img, index) =>{
                frm.append(`url_image_${index+1}`, {type:img.mime, uri:img.path, name:`imageDonation_${index+1}.jpg`})        
            })
        }
        const updateDonation = await Http.instance.post(resource, frm)
        console.log(updateDonation)
        if(updateDonation.Message === 'Actualizado'){
            this.setState({loading:false})
            Alert.alert(
                "FELICITACIONES!",
                "Su donación se ha actualizado correctamente.!",
                [ {text: "OK"} ],
                {cancelable: true}
            );
            this.props.navigation.goBack() 
        } 
    }
    render() {
        return (
                    <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                        <View style={styles.container}>
                            <Header transparent style={{backgroundColor:'#243949'}}>
                            <Left>
                                <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon_ name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                                </Button>
                            </Left>
                            <Body>
                                <Title style={styles.textHeader}>Editar donación</Title>
                            </Body>
                            </Header>
                            <View style={styles.cardBackground}>
                                {   this.state.loadingData && <ActivityIndicator size="large" color="#08e5d2" style={{marginTop:20}} />  }

                                {  this.state.loadingData ||
                                                            <ScrollView>
                                                                <CardItem cardBody style={{marginTop:10}}>
                                                                    <SliderImages dataImages={this.state.imagesDonate}/>
                                                                </CardItem>
                                                                <View style={{justifyContent:'space-evenly', flexDirection:'row', marginTop:20}}>
                                                                    <Card style={ [styles.btnSelectImage, { borderBottomColor: '#243949'}] }>
                                                                        <Icon active name='camera-outline' style={{fontSize:25, marginLeft:20}} />
                                                                        <Text style={{color:'#243949', fontSize:22, marginLeft:10, marginRight:20, fontWeight:'bold'}} onPress={()=> this.selectImageCamera()} >Cámara</Text>
                                                                    </Card>
                                                                    <Card style={ [styles.btnSelectImage, { borderBottomColor: '#243949'}] }>
                                                                        <Icon active name='image-outline' style={{fontSize:25, marginLeft:20}} />
                                                                        <Text style={{color:'#243949', fontSize:22, marginLeft:10, marginRight:20, fontWeight:'bold'}} onPress={()=> this.selectImagesGalery()}>Galería</Text>
                                                                    </Card> 
                                                                </View> 

                                                                <Label style={{marginLeft:15, marginTop:25, fontWeight:'bold'}}>Título</Label>
                                                                <Item success={false} style={{marginRight:15, marginLeft:15}}>
                                                                    <Input style={{marginLeft:10}} onChangeText={ title => {this.validaForm(title, 'titulo' )} } value={this.state.title} />
                                                                </Item>

                                                                <Label style={{marginLeft:15, marginTop:20, fontWeight:'bold'}}>Categoría</Label>
                                                                <Item success={false} style={{marginRight:15, marginLeft:15}} onPress={() => this.getCategoriesList()}>
                                                                    <Text style={{marginLeft:10, marginBottom:15, marginTop:15}}>{this.state.category}</Text>
                                                                </Item>
                                                                
                                                                <Label style={{marginLeft:15, marginTop:20, fontWeight:'bold'}}>Estado</Label>
                                                                <Item success={false} style={{marginRight:15, marginLeft:15}} onPress={() => this.getStatusProductList()}>
                                                                    <Text style={{marginLeft:10, marginBottom:15, marginTop:15}}>{this.state.stateName}</Text>
                                                                </Item>

                                                                <Label style={{marginLeft:15, marginTop:20, fontWeight:'bold'}}>Cantidad</Label>
                                                                <Item success={false} style={{marginRight:15, marginLeft:15}}>
                                                                    <Input style={{marginLeft:10}} onChangeText={ quantity => {this.validaForm(quantity, 'cantidad' )} } value={this.state.quantity} keyboardType="numeric" />
                                                                </Item>

                                                                <Label style={{marginLeft:15, marginTop:20, fontWeight:'bold'}}>Observaciones</Label>
                                                                <Textarea rowSpan={3} bordered style={{marginRight:15, marginLeft:15}} onChangeText={ observation => {this.validaForm(observation, 'observaciones' )}} value={this.state.observation}/>
                                                                                                                        
                                                                <Button block style={{marginLeft:20, marginRight:20, marginTop:20, marginBottom:20, backgroundColor: '#00bfa6'}} onPress={()=>this.updateDonation()} disabled={this.state.disabledBtnSave}>
                                                                    <Text>Guardar cambios</Text>
                                                                    {   this.state.loading && <ActivityIndicator size="large" color="#243949" />  }                            
                                                                </Button> 
                                                            </ScrollView>    
                                }
                            </View>

                            <View>
                                <ActionSheet ref={actionSheetRef} 
                                                gestureEnabled={true}  
                                                containerStyle={styles.containerActionSheet} 
                                                indicatorColor="#243949"
                                            >
                                    <View>
                                        <List>
                                            {this.state.data?.map(itm =>{
                                                return (
                                                        <ListItem thumbnail key={itm.id}>
                                                            <Left>
                                                                <Button transparent>
                                                                    { this.state.typeData === 'categorias' && <Icon active name='happy-outline' style={{fontSize:20,marginLeft:5, color:'black'}} /> }
                                                                    { this.state.typeData === 'estados' && <Icon active name='alert-circle-outline' style={{fontSize:20,marginLeft:5, color:'black'}} /> }
                                                                </Button>
                                                            </Left>
                                                            <Body>
                                                                <Pressable onPress={ () => this.onSelectedItem(itm.id,itm.name)} >
                                                                    <Text style={{fontSize:17}}>{itm.name}</Text>
                                                                </Pressable>
                                                            </Body>
                                                        </ListItem>
                                                )
                                            })}     
                                        </List>
                                    </View>
                                </ActionSheet>
                            </View>        
                        </View>
                    </LinearGradient>
          
        );
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
        backgroundColor: "#f7f8fa",
        marginTop:40,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    },
    btnSelectImage:{
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
    },
    containerActionSheet:{
        flex: 1,
        justifyContent:'center',
        backgroundColor:"#fff",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderTopColor:'#243949',
        borderTopWidth:3,
        padding:8       
    },
});

export default EditDonationScreen;