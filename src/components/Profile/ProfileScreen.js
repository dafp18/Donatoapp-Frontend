import React, { Component  } from 'react';
import {View,StyleSheet,Image, ScrollView,ActivityIndicator} from 'react-native';
import {Header,Card,Text,Button,Title,Body,Left, Icon, Form, Item, Label, Input} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../helpers/http';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image'
import ImagePicker from 'react-native-image-crop-picker';


class ProfileScreen extends Component {
    state={
        userLogged:null,
        idUser:null,
        nameUser:null,
        image_urlUser:null,
        addressUser:null,
        phoneUser:null,
        rolUser:null,
        creadoUser:null,
        btnSave:'none',
        showFrmUser : true,
        loadingBtnChangePwd: false,
        newPassword:'',
        confirmNewPassword:'',
        disableBtnChPwd : true,
        borderColorInpNewPassword:'#d9d5dc',
        iconNewPasswordSuccess:'none',
        iconNewPasswordError:'none',
        borderColorInpConfNewPassword:'#d9d5dc',
        iconConfNewPasswordSuccess:'none',
        iconConfNewPasswordError:'none',
        loading:true,
        imagesDonate:[],
        ImagesToSendApi:[],
        enableChangeImage:false,
        disableBtnSave:false
    }


    componentDidMount () {
        this.getUserLogged()
        this.getDataUser()
    }

    getUserLogged = async () => {
        try {
            let userLogged = await AsyncStorage.getItem('user')
            this.setState({userLogged})
        } catch(e) {
            console.log(`Error obteniendo la key user para el profile ${e}`)
        }   
    }
    
    goBackHome = () => {
        this.props.navigation.goBack()
    }

    getDataUser = async () => {
        let idUser = '',
            nameUser = '',
            image_urlUser = '',
            addressUser = '',
            phoneUser = '',
            rolUser = '',
            creadoUser = ''

        const resource = '/getDataUserLogged'
        setTimeout(async () => {
            let body = {
                email:this.state.userLogged
            }
            const user = await Http.instance.post(resource, JSON.stringify(body))
            if(user){
                user?.map(el => {
                    idUser = el.id
                    nameUser = `${el.name} ${el.lastname}`
                    image_urlUser = el.image_url
                    addressUser = el.address
                    phoneUser = el.phone
                    rolUser = el.rol
                    creadoUser = el.created_at
                })
                this.setState({idUser,nameUser,image_urlUser,addressUser,phoneUser,rolUser,creadoUser, loading:false})
            }
        }, 2);
    }

    onChangeInput = (text, label) => {
        
        if(label === 'newPassword'){
            if(text.length > 7 ){
                this.setState({newPassword:text,borderColorInpNewPassword:'green',iconNewPasswordSuccess:'flex', iconNewPasswordError:'none' })
            }
            
            if(text.length === 0){
                this.setState({iconNewPasswordSuccess:'none',iconNewPasswordError:'none', borderColorInpNewPassword:'#d9d5dc'})            
            }

            if( text.length > 0 && text.length <= 7 ){
                this.setState({iconNewPasswordSuccess:'none',iconNewPasswordError:'flex', borderColorInpNewPassword:'red'})            
            }
        }

        if(label === 'confirmNewPassword'){
            if(this.state.newPassword === text){
                this.setState({confirmNewPassword:text,borderColorInpConfNewPassword:'green',iconConfNewPasswordSuccess:'flex', iconConfNewPasswordError:'none' })
            }else{
                this.setState({confirmNewPassword:text,borderColorInpConfNewPassword:'red',iconConfNewPasswordSuccess:'none', iconConfNewPasswordError:'flex' }) 
            }
        }

        setTimeout(() => {
            if(this.state.newPassword === this.state.confirmNewPassword){
                this.setState({disableBtnChPwd:false})
            }else{
                this.setState({disableBtnChPwd:true,borderColorInpConfNewPassword:'red',iconConfNewPasswordSuccess:'none', iconConfNewPasswordError:'flex'}) 
            }
        }, 1);      
    }

    changePassword = async () => {
        this.setState({loadingBtnChangePwd:true, disableBtnChPwd:true})
        let body = {
            email:this.state.userLogged,
            newPassword:this.state.newPassword
        }
        const resource = '/changePassword'
        const resp = await Http.instance.post(resource, JSON.stringify(body))
        if(resp.Message === 'Cambiada'){
            Alert.alert(
                "ATENCIÓN!",
                "Contraseña cambiada correctamente!",
                [ {text: "OK", onPress: () => this.goLogin() } ],
                {cancelable: true}
            );
            this.setState({loadingBtnChangePwd:false})
        }       
    }

    reload = () => {
        this.setState({loading:true})
        this.getDataUser()
    }

    selectImagesGalery = () => {
        let imagesDonate = [],
            ImagesToSendApi = []
        ImagePicker.openPicker({
                        width: 300,
                        height: 400
                    })
                    .then(img => {
                        imagesDonate.push(img.path)
                        ImagesToSendApi.push(img)
                        this.setState({imagesDonate, ImagesToSendApi, image_urlUser:img.path, btnSave:'flex'})
                    });
    }

    selectImageCamera = () => {
        let imagesDonate = [],
            ImagesToSendApi = []
        ImagePicker.openCamera  ({
                    width: 300,
                    height: 400
                }).then(img => {
                        imagesDonate.push(img.path)
                        ImagesToSendApi.push(img)
                        this.setState({imagesDonate, ImagesToSendApi, image_urlUser:img.path, btnSave:'flex'})
                });
    }

    saveChanges =  async () =>{
        this.setState({disableBtnSave:true})
        let frm = new FormData()
        frm.append('id', this.state.idUser)
        console.log(this.state.idUser)
        this.state.ImagesToSendApi.forEach((img) =>{
            frm.append('url_image', {type:img.mime, uri:img.path, name:'imageDonation_.jpg'})        
        })
        const resource = '/updateDataUser'
        const updateUser = await Http.instance.post(resource, frm)
        if(updateUser.Message === 'Actualizado'){
            this.setState({disableBtnSave:false, btnSave:'none', enableChangeImage:false})
        }        
    }

    render(){
        
        return(
                <LinearGradient colors={['#243949', '#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                            <Left>
                                <Button transparent onPress={this.goBackHome}>
                                    <Icon_ name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                                </Button>
                            </Left>
                            <Body>
                                <Title style={styles.textHeader}>Mi cuenta</Title>
                            </Body>
                            <Icon name='refresh-outline' type="Ionicons" style={styles.iconHeader} onPress={this.reload}/>
                        </Header>
                        
                        <Card style={styles.cardFirst}>
                            { this.state.enableChangeImage  ?   <View style={{justifyContent:'space-evenly', flexDirection:'row', marginTop:70}}>
                                                                    <Card style={ [styles.btnSelectImage, { borderBottomColor: '#243949'}] }>
                                                                        <Icon active name='camera-outline' style={{fontSize:25, marginLeft:20}} />
                                                                        <Text style={{color:'#243949', fontSize:22, marginLeft:10, marginRight:20, fontWeight:'bold'}} onPress={()=> this.selectImageCamera()} >Cámara</Text>
                                                                    </Card>
                                                                    <Card style={ [styles.btnSelectImage, { borderBottomColor: '#243949'}] }>
                                                                        <Icon active name='image-outline' style={{fontSize:25, marginLeft:20}} />
                                                                        <Text style={{color:'#243949', fontSize:22, marginLeft:10, marginRight:20, fontWeight:'bold'}} onPress={()=> this.selectImagesGalery()}>Galería</Text>
                                                                    </Card> 
                                                                </View> 
                                                            :   null
                            }
                              
                            {   this.state.loading  ?   <ActivityIndicator size="large" color="#243949" style={{marginTop:120}} />  
                                                    :   <ScrollView>
                                                            <Title style={{color:'black', marginTop: this.state.enableChangeImage ? 30 : 80, textAlign:'center'}} >{ this.state.nameUser } </Title>   
                                                            { this.state.showFrmUser ?  <View>
                                                                                            <View style={{flexDirection:'row', paddingVertical:15, paddingHorizontal:30, marginTop:30}}>
                                                                                                <Icon name='mail-outline' type="Ionicons" style={{ color:"grey", fontSize:25}} />
                                                                                                <Text style={{ marginLeft:15,fontSize:18}}>{ this.state.userLogged }</Text>
                                                                                            </View>

                                                                                            <View style={{flexDirection:'row', paddingVertical:15, paddingHorizontal:30}}>
                                                                                                <Icon name='call-outline' type="Ionicons" style={{color:"grey", fontSize:25}} />
                                                                                                <Text style={styles.rowText}>{ this.state.phoneUser }</Text>
                                                                                                <Icon name='create-outline' type="Ionicons" style={{color:"grey", fontSize:25}}/>
                                                                                            </View>

                                                                                            <View style={{flexDirection:'row', paddingVertical:15, paddingHorizontal:30}}>
                                                                                                <Icon name='location-outline' type="Ionicons" style={{color:"grey", fontSize:25}} />
                                                                                                <Text style={styles.rowText}>{ this.state.addressUser }</Text>
                                                                                                <Icon name='create-outline' type="Ionicons" style={{color:"grey", fontSize:25}}/>
                                                                                            </View>

                                                                                            <View style={{flexDirection:'row', paddingVertical:15, paddingHorizontal:30}}>
                                                                                                <Icon name='person-circle-outline' type="Ionicons" style={{color:"grey", fontSize:25}}/>
                                                                                                <Text style={{ marginLeft:15,fontSize:18}}>{this.state.rolUser}</Text>
                                                                                            </View>
                                                                                            
                                                                                            <Button block style={[styles.btnSave, {display:this.state.btnSave}]} disabled={this.state.disableBtnSave} onPress={() => this.saveChanges()}>
                                                                                                <Text>Guardar cambios</Text>
                                                                                                {   this.state.disableBtnSave && <ActivityIndicator size="large" color="#243949" />  }                            
                                                                                            </Button>
                                                                                            <Button block style={styles.btnChangePwd} onPress={()=>{ this.setState({showFrmUser:false})}}>
                                                                                                <Text>Cambiar contraseña</Text>                            
                                                                                            </Button>
                                                                                        </View>
                                                                                     :  <View>
                                                                                            <Form style={{marginLeft:15, marginRight:15}}>                                
                                                                                                <Item floatingLabel style={{marginRight:15, borderColor:this.state.borderColorInpNewPassword}}>
                                                                                                    <Icon name='lock-closed-outline' type="Ionicons" color="black" size={20}/>
                                                                                                    <Label style={{marginLeft:10}}>Nueva contraseña</Label>
                                                                                                    <Input onChangeText={newPassword => this.onChangeInput(newPassword, 'newPassword')} secureTextEntry={true} style={{marginTop:8}}/>
                                                                                                    <Icon name='checkmark-circle' style={{color:'green', display:this.state.iconNewPasswordSuccess}} />
                                                                                                    <Icon name='close-circle' style={{color:'red', display:this.state.iconNewPasswordError}}/>
                                                                                                </Item> 

                                                                                                <Item floatingLabel style={{marginRight:15, borderColor:this.state.borderColorInpConfNewPassword}}>
                                                                                                    <Icon name='lock-open-outline' type="Ionicons" color="black" size={20}/>
                                                                                                    <Label style={{marginLeft:10}}>Confirmar nueva contraseña</Label>
                                                                                                    <Input onChangeText={confirmNewPassword => this.onChangeInput(confirmNewPassword, 'confirmNewPassword')} secureTextEntry={true} style={{marginTop:8}}/>
                                                                                                    <Icon name='checkmark-circle' style={{color:'green', display:this.state.iconConfNewPasswordSuccess}} />
                                                                                                    <Icon name='close-circle' style={{color:'red', display:this.state.iconConfNewPasswordError}}/>                                                                           
                                                                                                </Item>
                                                                                            </Form>    
                                                                                            <Button block style={{ marginLeft:25, marginRight:25, marginTop:35, 
                                                                                                                    backgroundColor: ((this.state.newPassword === this.state.confirmNewPassword) && (this.state.newPassword !== '' && this.state.confirmNewPassword !== '')) ? '#243949' : '#667580'
                                                                                                                }}  
                                                                                                                onPress={this.changePassword}
                                                                                                                disabled= {this.state.disableBtnChPwd}   >
                                                                                                <Text style={{color:'#fff'}}>CAMBIAR CONTRASEÑA</Text>
                                                                                                {   this.state.loadingBtnChangePwd && <ActivityIndicator size="large" color="#08e5d2" />  }
                                                                                            </Button>
                                                                                            <Button block transparent
                                                                                                    style={{ marginLeft:10, marginRight:10, marginTop:20}}  
                                                                                                    onPress={() => {this.setState({showFrmUser:true})}}
                                                                                            >
                                                                                                <Text style={{color:'#243949', borderBottomColor: "#243949", fontWeight:'bold'}}>CANCELAR</Text>
                                                                                            </Button>
                                                                                        </View> 
                                                            }
                                                    </ScrollView>    
                            }
                        </Card>
                        { this.state.image_urlUser  ?
                                                        <Card style={styles.cardImg}>
                                                            <FastImage source={ {uri: this.state.image_urlUser} } style={styles.img }/>  
                                                            <Icon name='create-outline' type="Ionicons" style={styles.iconImg} onPress={() => this.setState({enableChangeImage:true})} />
                                                        </Card> 
                                                    :
                                                        <Card style={styles.cardImg}>
                                                            <Image source={require('../../assets/img/donanteRegister.png')} style={styles.img}/>    
                                                            <Icon name='create-outline' type="Ionicons" style={styles.iconImg} onPress={() => this.setState({enableChangeImage:true})}/>
                                                        </Card>
                        }
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
        marginTop:20,
        marginLeft:40
    },
    iconHeader:{
        marginTop:20,
        color:'#fff'
    },
    cardFirst:{
        marginTop:150,
        marginLeft:15,
        marginRight:15,
        height:650,
        borderRadius:10,
        borderColor:'#fff',
        ...StyleSheet.absoluteFill
    },
    cardImg:{
        marginTop:90,
        marginLeft:140,
        marginRight:50,
        height: 130,
        width: 130,
        borderRadius:65,
        borderColor:'#243949',
        ...StyleSheet.absoluteFill
    },
    img:{
        height: 130,
        width: 130,
        borderRadius:65
    },
    iconImg:{
        marginTop:90,
        marginLeft:90,
        fontSize:35,
        color:'black',
        ...StyleSheet.absoluteFill
    },
    rowText: {
        marginLeft:15,
        fontSize:18,
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        width:260
    },
    btnChangePwd:{
        backgroundColor: '#243949',
        marginLeft:30,
        marginRight:30,
        marginTop:20
    },
    btnSave:{
        backgroundColor: '#00bfa6',
        marginLeft:30,
        marginRight:30,
        marginTop:30
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
    }
});

export default ProfileScreen;