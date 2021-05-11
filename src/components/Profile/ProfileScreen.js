import React, { Component  } from 'react';
import {View,StyleSheet,Image, ScrollView,ActivityIndicator} from 'react-native';
import {Header,Card,Text,Button,Title,Body,Left, Icon, Form, Item, Label, Input} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../helpers/http';


class ProfileScreen extends Component {
    state={
        userLogged:'dafp18@hotmail.com',
        //userLogged:'jagem88@gmail.com',
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
        iconConfNewPasswordError:'none'
    }


    componentDidMount () {
        this.getDataUser()
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
        let body = {
            email:this.state.userLogged
        }
        const user = await Http.instance.post(resource, JSON.stringify(body))
        user?.map(el => {
            idUser = el.id
            nameUser = `${el.name} ${el.lastname}`
            image_urlUser = el.image_url
            addressUser = el.address
            phoneUser = el.phone
            rolUser = el.rol
            creadoUser = el.created_at
        })
        this.setState({idUser,nameUser,image_urlUser,addressUser,phoneUser,rolUser,creadoUser})
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
                        </Header>
                        
                        <Card style={styles.cardFirst}>
                            <ScrollView>
                                <Title style={{color:'black', marginTop:80, textAlign:'center'}} >{ this.state.nameUser } </Title>   
                            
                            { this.state.showFrmUser ? 
                                                        <View>
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
                                                            
                                                            <Button block style={[styles.btnSave],{display:this.state.btnSave}} onPress={()=>{this.props.navigation.navigate('SelectRol')}}>
                                                                <Text>Guardar cambios</Text>                            
                                                            </Button>
                                                            <Button block style={styles.btn} onPress={()=>{ this.setState({showFrmUser:false})}}>
                                                                <Text>Cambiar contraseña</Text>                            
                                                            </Button>
                                                        </View>
                                                     :    
                                                     
                                                        <View>
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
                        </Card>
                        { this.state.image_urlUser  ?
                                                        <Card style={styles.cardImg}>
                                                            <Image source={ {uri: this.state.image_urlUser} } style={styles.img }/>  
                                                            <Icon name='create-outline' type="Ionicons" style={styles.iconImg}/>
                                                        </Card> 
                                                    :
                                                        <Card style={styles.cardImg}>
                                                            <Image source={require('../../assets/img/donanteRegister.png')} style={styles.img}/>    
                                                            <Icon name='create-outline' type="Ionicons" style={styles.iconImg}/>
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
        marginTop:20
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
    btn:{
        backgroundColor: '#243949',
        marginLeft:30,
        marginRight:30,
        marginTop:35
    },
    btnSave:{
        backgroundColor: '#00bfa6',
        marginLeft:30,
        marginRight:30,
        marginTop:40
    }
});

export default ProfileScreen;