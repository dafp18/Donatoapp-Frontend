import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Left, Button, Right, Icon, Body, Title } from "native-base";
import {Image,Pressable, StyleSheet} from 'react-native';

class CardFundacion extends Component {
    
    render(){
        
        return(
            <Container>
                <Header transparent>
                    <Body>
                        <Title style = {{color:'black'}}>Bienvenido!</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Icon name="home" style={{color:'black'}} />
                        </Button>
                    </Right>
                </Header>                   
                <Text>Hola!</Text>
                <Text>Fundacion prueba</Text>
                
                <Content padder>
                <Card>
                
                    <CardItem button onPress={() => this.props.navigation.navigate('ListDonaciones')}>
                     <Text>Donaciones disponibles</Text>
                    </CardItem>
                
                </Card>
                <Card>
                    <CardItem button onPress={() => alert("This is Card Header")}>
                    <Text>Donaciones en trámite</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button onPress={() => alert("This is Card Header")}>
                    <Text>Donaciones aceptadas</Text>
                    </CardItem>
                </Card>
                <Image source={require('../../../assets/img/undraw_Relaxing.png')} style={{height: 100, width: null, flex: 1, marginTop:20}}/>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'red'
    }

})

export default CardFundacion;