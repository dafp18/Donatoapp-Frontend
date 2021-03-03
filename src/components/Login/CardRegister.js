import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Label, Card, CardItem, Content,Icon,Button, Text } from 'native-base';

class CardRegister extends Component {
    
    render(){
        const {showNit} = this.props
        console.log(this.props)
        return(
            <Content>
                    <Form>
                        <Item floatingLabel>
                            <Icon active name='home' />
                            <Label>Nit</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Icon active name='home' />
                            <Label>Cédula</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Icon active name='home' />
                            <Label>Nombres</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Icon active name='home' />
                            <Label>Teléfono</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Icon active name='home' />
                            <Label>Dirección</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Icon active name='home' />
                            <Label>Localidad</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Icon active name='home' />
                            <Label>Correo electrónico</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Icon active name='home' />
                            <Label>Contraseña</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Icon active name='home' />
                            <Label>Confirmar contraseña</Label>
                            <Input />
                        </Item>
                        <Button block style={{marginLeft:10, marginRight:10, marginTop:10}}>
                            <Text>Registrarse</Text>
                        </Button>
                    </Form>
             
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default CardRegister;