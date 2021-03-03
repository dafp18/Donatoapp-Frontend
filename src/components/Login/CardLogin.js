import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Label, Card, CardItem, Content,Icon,Button, Text } from 'native-base';

class CardLogin extends Component {
    render(){
        return(
            <Content padder>
                    <Form>
                        <Item floatingLabel>
                            <Icon active name='home' />
                            <Label>Correo electrónico</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Icon active name='home' />
                            <Label>Contraseña</Label>
                            <Input />
                        </Item>
                        <Button block style={{marginLeft:10, marginRight:10, marginTop:10}}>
                            <Text>Primary</Text>
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