import React, { Component } from 'react';
import { StyleSheet,ActivityIndicator,Pressable } from 'react-native';
import { Form, Item, Input, Label, Card, CardItem, Content,Icon,Button, Text,Right, Title } from 'native-base';

class CardLogin extends Component {
    state = {
        isLoggin:false,
        email: '',
        password: '',
        userTemp: 'diegoa',
        pwdTemp: '12345',
        textBtnInciarSesion:'Iniciar sesión',
        loading: false
    }

    startSession = () => {
        const {email, password, userTemp, pwdTemp} = this.state
        if(email === '' || password === ''){
            return
        }
        this.setState({textBtnInciarSesion:'Iniciando sesión . . .', loading:true})
        setTimeout(() =>{
            if(email === userTemp && password === pwdTemp){
                this.props.navigation.navigate('HomeDonante')
                this.setState({textBtnInciarSesion:'Iniciar sesión',loading: false })
            }else{
                alert('Email y contraseña inválidos')
                this.setState({textBtnInciarSesion:'Iniciar sesión',loading: false })
            }
        },3000)
    }
    render(){
        const {email, password,textBtnInciarSesion,loading,handleDisabled,colorbtn} = this.state
        return(
                <Content padder style={{marginTop:50}}>
                    
                    <Title style={styles.title}>Iniciar sesión</Title>
                    
                    <Card style={styles.cardEmail}>
                        <Form>
                            <Item floatingLabel last>
                                <Icon active name='person' />
                                <Label>Correo electrónico</Label>
                                <Input onChangeText={email => this.setState({email})} />
                            </Item>
                        </Form>    
                    </Card>

                    <Card style={styles.cardPwd}>
                        <Form>
                            <Item floatingLabel last>
                            <Icon active name='key' />
                            <Label>Contraseña</Label>
                            <Input onChangeText={password => this.setState({password})} />
                            </Item>
                        </Form>    
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

                        <Pressable>
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