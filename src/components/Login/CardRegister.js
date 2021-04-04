import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Content, Item, Icon, Label, Input, Button,Text } from 'native-base';

class CardRegister extends Component {
    
    registerNewUSer = () => {
        alert('Usuario registrado correctamente')
        this.props.navigation.navigate('Login')
    }
    render(){
                  
        return(
            <Content padder style={{marginTop:10}}>
                        <View style={styles.containerImg} >
                            <Image
                                style={{ height:100, width:100, marginBottom:10 }}
                                source={require('../../assets/img/donanteRegister.png')}
                                //source={require('../../assets/img/fundacionRegister.png')}
                            />
                        </View>
                
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='card' style={styles.icon} />
                            <Label >Nit</Label>
                            <Input style={{color:'green'}} />
                        </Item>
                        
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='card' style={styles.icon} />
                            <Label >Cédula</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={styles.labels}  >
                            <Icon active name='person' style={styles.icon} />
                            <Label>Nombres</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='people' style={styles.icon}/>
                            <Label>Apellidos</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='call' style={styles.icon}/>
                            <Label>Teléfono</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='location' style={styles.icon}/>
                            <Label>Dirección</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='compass' style={styles.icon}/>
                            <Label>Localidad</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='at' style={styles.icon}/>
                            <Label>Correo electrónico</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='key' style={styles.icon}/>
                            <Label>Contraseña</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='key' style={styles.icon}/>
                            <Label>Confirmar contraseña</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        
                        <Button block style={styles.btn} onPress={this.registerNewUSer} >
                            <Text>Registrarse</Text>
                        </Button>
                        
                        
                        
        </Content>
        )
    }
}

const styles = StyleSheet.create({
    icon:{
        color: "#08e5d2",
        textAlign: "center"
    },
    btn:{
        backgroundColor: '#667580',//'#243949',
        marginLeft:15,
        marginRight:15,
        marginTop:20
    },
    labels:{
        marginTop:10,
        marginLeft:20
    },
    icon:{
        color:'#243949'
    },
    containerImg:{
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    }
       
});

export default CardRegister;