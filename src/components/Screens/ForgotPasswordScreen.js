import React, { Component } from 'react';
import {Header, Form, Item,Input, Label, Button, Left,Body,Title, Icon,Card} from "native-base";
import {StyleSheet,View,Text,ActivityIndicator,TextInput,Alert,ScrollView,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../helpers/http';

class ForgotPasswordScreen extends Component {
    state={
        email:'',
        textBtnVerify:'VERIFICAR',
        disableBtnEmail:true,
        loadingBtnEmail: false,
        loadingBtnCode: false,
        loadingBtnChangePwd: false,
        code: '',
        textBtnVerifyCode: 'VERIFICAR CÓDIGO',
        disableBtnCode: true,
        showOptCode:false,
        showFrmChangePassword:false,
        newPassword:'',
        confirmNewPassword:'',
        isEditableInputCode:true,
        disableBtnChPwd : true,
        borderColorInpNewPassword:'#d9d5dc',
        iconNewPasswordSuccess:'none',
        iconNewPasswordError:'none',
        borderColorInpConfNewPassword:'#d9d5dc',
        iconConfNewPasswordSuccess:'none',
        iconConfNewPasswordError:'none'
    }

    goLogin = () =>{
        this.props.navigation.navigate('Login')
    }

    onChangeInput = (text, label) => {
        if(label === 'email'){
            if(text !== ''){
                this.setState({email:text, disableBtnEmail:false})
            }else{
                this.setState({email:text, disableBtnEmail:true}) 
            } 
        }

        if(label === 'code'){
            if(text !== ''){
                this.setState({code:text, disableBtnCode:false})
            }else{
                this.setState({code:text, disableBtnCode:true}) 
            } 
        }

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

    verifyEmail = async () =>{
        
        this.setState({disableBtnEmail:true,textBtnVerify: 'VERIFICANDO...', loadingBtnEmail:true })
        let body = {
            email:this.state.email
        }
        const resource = '/validateIfExistEmail'
        const resp = await Http.instance.post(resource, JSON.stringify(body))
        if(resp.Message === 'Not found'){
            Alert.alert(
                "ATENCIÓN!",
                `El usuario: ${this.state.email} no existe`,
                [ { text: "OK" } ],
                {cancelable: true}
            );
            this.setState({disableBtnEmail:false,textBtnVerify: 'VERIFICAR', loadingBtnEmail:false })
        }

        if(resp.Message === 'Registrado'){
            Alert.alert(
                "ATENCIÓN!",
                `Hemos enviado un código de verificación a su correo electrónico: ${this.state.email}`,
                [ { text: "OK" } ],
                {cancelable: true},
                 
            );
            this.setState({ disableBtnEmail:false,textBtnVerify: 'VERIFICAR', loadingBtnEmail:false, showOptCode:true }) 
        }
        console.log(resp)
    }

    verifyCode = async () =>{
        if(this.state.code.length === 4){
            this.setState({disableBtnCode:true,textBtnVerifyCode: 'VERIFICANDO CÓDIGO...', loadingBtnCode:true })
        }
        
        let body = {
            email:this.state.email,
            code:this.state.code
        }
        const resource = '/verifyCodeForgetPassword'
        const resp = await Http.instance.post(resource, JSON.stringify(body))
        if(resp.Message === 'Incorrecto'){
            Alert.alert(
                "ATENCIÓN!",
                "El código es incorrecto",
                [ { text: "OK" } ],
                {cancelable: true}
            );
            this.setState({disableBtnCode:false,textBtnVerifyCode: 'VERIFICAR', loadingBtnCode:false})
        }

        if(resp.Message === 'Verificado'){
            this.setState({disableBtnCode:true,textBtnVerifyCode: 'VERIFICADO CORRECTAMENTE', loadingBtnCode:false, showFrmChangePassword:true, isEditableInputCode:false })
        }
    }

    changePassword = async () => {
        this.setState({loadingBtnChangePwd:true, disableBtnChPwd:true})
        let body = {
            email:this.state.email,
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
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                        <Left>
                            <Button transparent onPress={this.goLogin}>
                            <Icon_ name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.textHeader}>Recuperar contraseña</Title>
                        </Body>
                        </Header>
                        <View style={[styles.cardBackground, {backgroundColor: "#f7f8fa"}]}>
                            <ScrollView> 
                                                        
                                <Form style={{marginTop:20}}>
                                    { this.state.showOptCode ? <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                                                    <Label style={{marginLeft:5}}>Ingrese código</Label>
                                                                    <TextInput style={{borderWidth: 1, height: 50, width:130, marginLeft:15, fontSize:28}}
                                                                        onChangeText = {code => this.onChangeInput(code,'code')}
                                                                        placeholder="  # # # #  "
                                                                        keyboardType="numeric"
                                                                        textAlign="center"
                                                                        editable={this.state.isEditableInputCode}
                                                                    />
                                                                </View>
                                                            :  <Item floatingLabel style={{marginRight:15}}>
                                                                    <Icon name='mail-outline' type="Ionicons" color="black" size={20}/>
                                                                    <Label style={{marginLeft:5}}>Correo electrónico</Label>
                                                                    <Input onChangeText={email => this.onChangeInput(email, 'email')} />
                                                                </Item> 
                                    }    
                                </Form>
                                                        
                                { this.state.showOptCode ? <Button block style={{ marginLeft:10, marginRight:10, marginTop:25, 
                                                                                backgroundColor: (this.state.code.length === 4 ) ? '#243949' : '#667580'
                                                                                }}  
                                                                                onPress={this.verifyCode}
                                                                                disabled= {this.state.disableBtnCode}   >
                                                                        <Text style={{color:'#fff'}}>{this.state.textBtnVerifyCode}</Text>
                                                                        {   this.state.loadingBtnCode && <ActivityIndicator size="large" color="#08e5d2" />  }
                                                            </Button>
                                                        :   <Button block style={{ marginLeft:10, marginRight:10, marginTop:25, 
                                                                                    backgroundColor: (this.state.email !== '') ? '#243949' : '#667580'
                                                                                }}  
                                                                                onPress={this.verifyEmail}
                                                                                disabled= {this.state.disableBtnEmail}   >
                                                                <Text style={{color:'#fff'}}>{this.state.textBtnVerify}</Text>
                                                                {   this.state.loadingBtnEmail && <ActivityIndicator size="large" color="#08e5d2" />  }
                                                            </Button>  

                                }

                                { this.state.showFrmChangePassword &&   <View>
                                                                            <Form style={{marginTop:20}}>                                
                                                                                <Item floatingLabel style={{marginRight:15, borderColor:this.state.borderColorInpNewPassword}}>
                                                                                    <Icon name='lock-closed-outline' type="Ionicons" color="black" size={20}/>
                                                                                    <Label style={{marginLeft:5}}>Nueva contraseña</Label>
                                                                                    <Input onChangeText={newPassword => this.onChangeInput(newPassword, 'newPassword')} secureTextEntry={true}/>
                                                                                    <Icon name='checkmark-circle' style={{color:'green', display:this.state.iconNewPasswordSuccess}} />
                                                                                    <Icon name='close-circle' style={{color:'red', display:this.state.iconNewPasswordError}}/>
                                                                                </Item> 

                                                                                <Item floatingLabel style={{marginRight:15, borderColor:this.state.borderColorInpConfNewPassword}}>
                                                                                    <Icon name='lock-open-outline' type="Ionicons" color="black" size={20}/>
                                                                                    <Label style={{marginLeft:5}}>Confirmar nueva contraseña</Label>
                                                                                    <Input onChangeText={confirmNewPassword => this.onChangeInput(confirmNewPassword, 'confirmNewPassword')} secureTextEntry={true} />
                                                                                    <Icon name='checkmark-circle' style={{color:'green', display:this.state.iconConfNewPasswordSuccess}} />
                                                                                    <Icon name='close-circle' style={{color:'red', display:this.state.iconConfNewPasswordError}}/>                                                                           
                                                                                </Item>
                                                                            </Form>    
                                                                            <Button block style={{ marginLeft:10, marginRight:10, marginTop:25, 
                                                                                                    backgroundColor: ((this.state.newPassword === this.state.confirmNewPassword) && (this.state.newPassword !== '' && this.state.confirmNewPassword !== '')) ? '#243949' : '#667580'
                                                                                                }}  
                                                                                                onPress={this.changePassword}
                                                                                                disabled= {this.state.disableBtnChPwd}   >
                                                                                <Text style={{color:'#fff'}}>CAMBIAR CONTRASEÑA</Text>
                                                                                {   this.state.loadingBtnChangePwd && <ActivityIndicator size="large" color="#08e5d2" />  }
                                                                            </Button>
                                                                        </View> 
                                }                 
                            </ScrollView>      
                        </View>
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
      flex: 1
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
        marginTop:40,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    }
    
});

export default ForgotPasswordScreen;