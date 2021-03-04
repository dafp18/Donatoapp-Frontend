import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Label, Card, CardItem, Content,Icon,Button, Text, Container,Footer,Textarea } from 'native-base';

class DataDonationScreen extends Component {
    
    handleContinue = () =>{
        this.props.navigation.navigate('SelectImageDonation')
    }
    render(){
        console.log(this.props)
        return(
            <Container>
                <Content>
                    <Form>
                        
                            <Label>Estado</Label>
                            <Button ><Text>Nuevo</Text></Button>
                            <Button ><Text>Usado</Text></Button>
                        
                        <Item floatingLabel>
                            <Icon active name='home' />
                            <Label>Título</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Icon active name='home' />
                            <Label>Cantidad</Label>
                            <Input />
                        </Item>
                        <Textarea rowSpan={5} bordered placeholder="Textarea" />
                        
                    </Form>
            </Content>
            <Footer>
            <Button block onPress={this.handleContinue} >
                <Text>Continuar</Text>
            </Button>
        </Footer>
        </Container>

            
        )
    }
}

const styles = StyleSheet.create({
    
});

export default DataDonationScreen;