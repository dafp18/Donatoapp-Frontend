import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Form, Item, Input, Label, Card, CardItem, Content,Icon,Button, Text, Container,Footer,Textarea } from 'native-base';

class DataDonationScreen extends Component {
    handleContinue = () =>{
        this.props.navigation.navigate('selectLocation')
    }
    render(){
        console.log(this.props)
        return(
            <Container>
                <Content>
                
                <Image source={require('../../assets/img/undraw_moments.png')} style={{height: 250, width: null, flex: 1}}/>
                <Card>
                    <CardItem button onPress={this.getprops}>
                     <Text>aqui fotosss</Text>
                                     
                    </CardItem>
                    
                </Card>
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