import React, { Component } from 'react';
import { StyleSheet,ActivityIndicator,Pressable, Alert} from 'react-native';
import { Form, Item, Input, Label, Card, Content,Icon,Button, Text, Title } from 'native-base';
import Http from '../../helpers/http';
import AsyncStorage from '@react-native-async-storage/async-storage';

class CardLogin extends Component {
    state = {
        isLoggin:false,
        email: null,
        password: null,
        textBtnInciarSesion:'Iniciar sesión',
        diabledBtnStartSession:true,
        loading: false,
        menusDonante: [
            { id:'optHD_0001', title: 'Nueva donación',img: require('../../assets/img/MenuDonar_.png'), goScreen:'SelectCategory'},
            { id:'optHD_0002', title: 'Historial donaciones',img: require('../../assets/img/MenuHistorial_.png'), goScreen:'DonationsHistory'},
            /* { id:'optHD_0003', title: 'Fundaciones',img: require('../../assets/img/MenuFundaciones_.png'),  goScreen:'FundationsList'}, */
            { id:'optHD_0003', title: 'Tips para donar',img: require('../../assets/img/TipsDonar_.png'),  goScreen:'TipsToDonate'}
        ],
        menusFundacion: [
            { id:'optHF_0001', title: 'Donaciones disponibles',img: require('../../assets/img/MenuFunDonacionesBus.png'), goScreen:'ListDonaciones'},
            { id:'optHF_0002', title: 'Donaciones en trámite',img: require('../../assets/img/MenuFunDonacionesTra.png'), goScreen:'DonacionesEnTramiteScreen'},
            { id:'optHF_0003', title: 'Donaciones aceptadas',img: require('../../assets/img/MenuFunDonacionesAcp.png'),  goScreen:'DonacionesAceptadasScreen'},
            /* { id:'optHF_0004', title: 'Tips donaciones',img: require('../../assets/img/MenuFunDonacionesPre.png'),  goScreen:'TipsToDonate'} */
        ]
    }

    validateForm = (text, label) => {
        if(label === 'email'){
            this.setState({email:text})
        }

        if(label === 'password'){
            this.setState({password:text})
        }

        setTimeout(() => {
            if(this.state.email && this.state.password){
                this.setState({diabledBtnStartSession:false})
            }
    
            if(!this.state.email || !this.state.password){
                this.setState({diabledBtnStartSession:true})
            }   
        }, 1);
        
    }

    startSession = async () => {
        this.setState({textBtnInciarSesion:'Iniciando sesión ...', loading:true, diabledBtnStartSession:true})
        const resource = '/login'
        let body = {
            email:this.state.email,
            password: this.state.password,
            device_name: "mobile"
        }
        const dataLogin = await Http.instance.post(resource, JSON.stringify(body))
        if(dataLogin.Message === 'emailFail' || dataLogin.Message === 'passwordFail' || dataLogin.Message === 'disabled'){
            let msj = ''
            if(dataLogin.Message === 'emailFail'){ msj = "El email ingresado no existe" }
            if(dataLogin.Message === 'passwordFail'){ msj = "La contraseña es incorrecta" }
            if(dataLogin.Message === 'disabled'){ msj = "Debe confirmar su cuenta para poder ingresar"}
            this.setState({textBtnInciarSesion:'Iniciar sesión',loading:false, diabledBtnStartSession:false})
            Alert.alert(
                "ERROR!",
                msj,
                [ {text: "OK"} ],
                {cancelable: true}
            );
            return
        }

        if(dataLogin.hasOwnProperty('token')){
            let name = `${dataLogin.name} ${dataLogin.lastname}`,
                ultimoIngreso = `${dataLogin.ultimoIngreso}`

            if(dataLogin.rol === 3){
                this.props.navigation.navigate('Home', {menus:this.state.menusDonante, imgPrincipaly: require('../../assets/img/undraw_city_life.png'), name, ultimoIngreso })
                this.setState({textBtnInciarSesion:'Iniciar sesión',loading:false, diabledBtnStartSession:false })
            }else{
                this.props.navigation.navigate('Home',{menus:this.state.menusFundacion,imgPrincipaly: require('../../assets/img/undraw_suburbs.png'), name, ultimoIngreso})
                this.setState({textBtnInciarSesion:'Iniciar sesión',loading: false, diabledBtnStartSession:false })       
            }
            try {
                await AsyncStorage.setItem('idUser', dataLogin.userId.toString())
                await AsyncStorage.setItem('user', dataLogin.user)
                await AsyncStorage.setItem('token', dataLogin.token)
            } catch (e) {
                console.log(`error setItem token: ${e}`)
            }
        }       
    }

    goForgotPassword = () => {
        this.props.navigation.navigate('ForgotPassword')
    }
    render(){
        const {textBtnInciarSesion,loading} = this.state
        return(
                <Content padder style={{marginTop:50}}>
                    
                    <Title style={styles.title}>Iniciar sesión</Title>
                    
                    <Card style={styles.cardEmail}>                       
                        <Item floatingLabel last>
                            <Icon name='mail-outline' type="Ionicons" />
                            <Label>Correo electrónico</Label>
                            <Input onChangeText={email => this.validateForm(email, 'email')} keyboardType="email-address"/>
                        </Item>    
                    </Card>

                    <Card style={styles.cardPwd}>
                        <Item floatingLabel last>
                        <Icon name='lock-closed-outline' type="Ionicons" />
                        <Label>Contraseña</Label>
                        <Input secureTextEntry={true} onChangeText={password => this.validateForm(password, 'password')} />
                        </Item>
                    </Card>

                    <Form>
                        <Button block style={{ marginLeft:10, marginRight:10, marginTop:10,
                                                backgroundColor: !this.state.diabledBtnStartSession ? '#243949' : '#667580'
                                            }} 
                                            disabled={this.state.diabledBtnStartSession} 
                                            onPress={this.startSession}>
                            <Text>{textBtnInciarSesion}</Text>
                            {   loading && <ActivityIndicator size="large" color="#08e5d2" />  }
                        </Button>

                        <Button block style={styles.btn} onPress={()=>{this.props.navigation.navigate('SelectRol')}}>
                            <Text>Registrarse</Text>                            
                        </Button>

                        <Pressable onPress={ () => this.goForgotPassword() }>
                            <Title style={styles.titleForgotPwd}>¿ ÓLVIDO SU CONTRASEÑA ?</Title>
                        </Pressable>
                    </Form>
                </Content>
        )
    }
}

const styles = StyleSheet.create({

    title:{
        marginTop:10,
        color: 'black',
        textAlign : 'center',
        fontWeight: "bold",
        fontSize:25
    },
    btnforgotpwd:{
        marginTop: 40,
    },
    cardEmail:{
        marginTop: 40,
        marginBottom: 20,
        borderRadius:10,
        padding:7
    },
    cardPwd:{
        padding:7,
        marginTop: 5,
        marginBottom: 20,
        borderRadius:10
    },
    titleForgotPwd:{
        marginTop:30,
        fontSize:15,
        color: 'black',
        textAlign : 'center',
        fontWeight: "bold",
    },
    btn:{
        backgroundColor: '#243949',
        marginLeft:10,
        marginRight:10,
        marginTop:10
    },
    
});

export default CardLogin;