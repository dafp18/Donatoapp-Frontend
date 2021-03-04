import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Label, Card, CardItem, Content,Icon,Button, Text } from 'native-base';

class CardLogin extends Component {
    state = {
        isLoggin:false,
        email: '',
        password: '',
        userTemp: 'diegoa',
        pwdTemp: '12345'
    }

    handleStartSession = () => {
        alert('Bienvenido!!')
        this.props.navigation.navigate('HomeFundacion')
    }
    render(){
        console.log(this.props, 'props en el card login')
        return(
            <Content padder>
                    <Form>
                        <Item floatingLabel>
                            <Icon active name='person' />
                            <Label>Correo electrónico</Label>
                            <Input/>
                        </Item>
                        <Item floatingLabel>
                            <Icon active name='home' />
                            <Label>Contraseña</Label>
                            <Input/>
                        </Item>
                        <Button block style={{marginLeft:10, marginRight:10, marginTop:10}} onPress={this.handleStartSession}>
                            <Text>Iniciar sesión</Text>
                        </Button>
                        <Button transparent>
                            <Text>Olvide mi contraseña</Text>
                        </Button>
                    </Form>
             
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default CardLogin;