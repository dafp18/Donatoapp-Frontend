import React, { Component } from 'react';
import { StyleSheet,ActivityIndicator,Pressable } from 'react-native';
import { Form, Item, Input, Label, Card, Content,Icon,Button, Text, Title } from 'native-base';

class CardLogin extends Component {
    state = {
        isLoggin:false,
        email: '',
        password: '',
        userTemp: 'diegoa',
        pwdTemp: '12345',
        textBtnInciarSesion:'Iniciar sesión',
        loading: false,
        menusDonante: [
            { id:'optHD_0001', title: 'Nueva donación',img: require('../../assets/img/MenuDonar_.png'), goScreen:'SelectCategory'},
            { id:'optHD_0002', title: 'Historial donaciones',img: require('../../assets/img/MenuHistorial_.png'), goScreen:'DonationsHistory'},
            /* { id:'optHD_0003', title: 'Fundaciones',img: require('../../assets/img/MenuFundaciones_.png'),  goScreen:'FundationsList'}, */
            { id:'optHD_0003', title: 'Tips para donar',img: require('../../assets/img/TipsDonar_.png'),  goScreen:'TipsToDonate'}
        ],
        menusFundacion: [
            { id:'optHF_0001', title: 'Donaciones disponibles',img: require('../../assets/img/MenuFunDonacionesBus.png'), goScreen:'ListDonaciones'},
            { id:'optHF_0002', title: 'Donaciones en trámite',img: require('../../assets/img/MenuFunDonacionesTra.png'), goScreen:'DonationsHistory'},
            { id:'optHF_0003', title: 'Donaciones aceptadas',img: require('../../assets/img/MenuFunDonacionesAcp.png'),  goScreen:'FundationsList'},
            { id:'optHF_0004', title: 'Tips donaciones',img: require('../../assets/img/MenuFunDonacionesPre.png'),  goScreen:'TipsToDonate'}
        ]
    }

    startSession = () => {
        const {email, password, userTemp, pwdTemp} = this.state
        if(email === '' || password === ''){
            return
        }
        this.setState({textBtnInciarSesion:'Iniciando sesión . . .', loading:true})
        setTimeout(() =>{
            if(email === userTemp && password === pwdTemp){
                this.props.navigation.navigate('Home', {menus:this.state.menusDonante, imgPrincipaly: require('../../assets/img/undraw_city_life.png')})
                this.setState({textBtnInciarSesion:'Iniciar sesión',loading: false })
            }else if(email === 'diegoafun' && password === pwdTemp){
                this.props.navigation.navigate('Home',{menus:this.state.menusFundacion,imgPrincipaly: require('../../assets/img/undraw_suburbs.png')})
                this.setState({textBtnInciarSesion:'Iniciar sesión',loading: false })    
            }else{
                alert('Email y contraseña inválidos')
                this.setState({textBtnInciarSesion:'Iniciar sesión',loading: false })
            }
        },3000)
    }

    goForgotPassword = () => {
        this.props.navigation.navigate('ForgotPassword')
    }
    render(){
        const {email, password,textBtnInciarSesion,loading,handleDisabled,colorbtn} = this.state
        return(
                <Content padder style={{marginTop:50}}>
                    
                    <Title style={styles.title}>Iniciar sesión</Title>
                    
                    <Card style={styles.cardEmail}>
                        
                            <Item floatingLabel last>
                                <Icon name='mail-outline' type="Ionicons" />
                                <Label>Correo electrónico</Label>
                                <Input onChangeText={email => this.setState({email})} />
                            </Item>
                        
                    </Card>

                    <Card style={styles.cardPwd}>
                        
                            <Item floatingLabel last>
                            <Icon name='lock-closed-outline' type="Ionicons" />
                            <Label>Contraseña</Label>
                            <Input secureTextEntry={true} onChangeText={password => this.setState({password})} />
                            </Item>
                        
                    </Card>

                    <Form>
                        <Button block style={{ marginLeft:10, marginRight:10, marginTop:10, 
                                                backgroundColor: (email !== '' || password !== '' ) ? '#243949' : '#667580'
                                            }}  
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