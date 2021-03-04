import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Form, Item, Input, Label, Card, CardItem, Content,Icon,Button, Text, Container,Footer,Textarea } from 'native-base';

class selectLocationDonationScreen extends Component {
    finishDonate = () =>{
        this.props.navigation.navigate('HomeDonante')
        alert('Donación publicada correctamente!')
    }
    render(){
        console.log(this.props)
        return(
            <Container>
                <Content>
                <Card>
                    <CardItem button onPress={this.getprops}>
                     <Text>Suba</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button onPress={this.getprops}>
                     <Text>Usme</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button onPress={this.getprops}>
                     <Text>Tunjuelito</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button onPress={this.getprops}>
                     <Text>Usaquen</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button onPress={this.getprops}>
                     <Text>Antonio Nariño</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button onPress={this.getprops}>
                     <Text>Rafael uribe uribe</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button onPress={this.getprops}>
                     <Text>Fontibon</Text>
                    </CardItem>
                </Card>
            </Content>
            <Footer>
            <Button block onPress={this.finishDonate} >
                <Text>Donar ahora!</Text>
            </Button>
        </Footer>
        </Container>

            
        )
    }
}

const styles = StyleSheet.create({
    
});

export default selectLocationDonationScreen;