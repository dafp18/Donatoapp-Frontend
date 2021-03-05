import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Left, Button, Right, Icon, Body, Title } from "native-base";
import {Image,Pressable, StyleSheet} from 'react-native';

class CardDonante extends Component {
    getprops = () => {
        this.props.navigation.navigate('SelectCategory')
    }
    render(){
        const { title, body } = this.props
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
                <Text>Diego Alejandro Forero Pinzón</Text>
                
                <Content padder>
                <Card>
                {/* <Pressable onPress={this.getprops}> */}
                    <CardItem button onPress={this.getprops}>
                     <Text>{title}</Text>
                    <Image source={require('../../../assets/img/undraw_suburbs.png')} style={{height: 120, width: null, flex: 1}}/>
                    {/* <Image source={require('../../../assets/img/undraw_moments.png')} style={{height: 300, width: 100, flex: 1}}/> */}
                    </CardItem>
                    {/* </Pressable> */}    
                </Card>
                <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>{title}</Text>
                    </CardItem>
                    <CardItem footer button onPress={() => alert("This is Card Footer")}>
                    <Text>{body}</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>{title}</Text>
                    </CardItem>
                    <CardItem footer button onPress={() => alert("This is Card Footer")}>
                    <Text>{body}</Text>
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

export default CardDonante;