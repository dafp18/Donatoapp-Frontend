import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Left, Button, Right, Icon, Body, Title } from "native-base";
import {Image,Pressable, StyleSheet, ImageBackground,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class CardDonante extends Component {
    getprops = () => {
        console.log('upaleeeee')
        this.props.navigation.navigate('SelectCategory')
    }
    render(){
        console.log('props homeDonation')
        const { title, body } = this.props
        return(
            <Content padder style={{marginTop:50}}>
                
                <Image source={require('../../../assets/img/undraw_city_life.png')} style={{height: 120, width: 400}}/>
                <Title style={styles.title}>Diego Alejandro Forero Pinzón</Title>
                <Text note style={styles.textNote}>Último ingreso: 2021/05/31 03:00:05 pm</Text>
                
                <Pressable onPress={this.getprops}>
                <Card style={styles.cardFirst} >
                    <LinearGradient colors={['#243949','#08e5d2']} style={styles.linearGradient}>
                        <ImageBackground source={require('../../../assets/img/circles.png')} style={styles.image}>
                            <Text style={styles.text}>Donar</Text>
                        </ImageBackground>                   
                    </LinearGradient>  
                </Card>
                </Pressable>

                <Card >
                    <LinearGradient colors={['#243949','#000000']} style={styles.linearGradient}>
                        <ImageBackground source={require('../../../assets/img/circles.png')} style={styles.image}>
                            <Text style={styles.text}>Mis donaciones</Text>
                        </ImageBackground>                   
                    </LinearGradient>  
                </Card>

                <Card >
                    <LinearGradient colors={['#243949','#08e5d2']} style={styles.linearGradient}>
                        <ImageBackground source={require('../../../assets/img/circles.png')} style={styles.image}>
                            <Text style={styles.text}>Historial donaciones</Text>
                        </ImageBackground>                   
                    </LinearGradient>  
                </Card>
                <Card >
                    <LinearGradient colors={['#243949','#000000']} style={styles.linearGradient}>
                        <ImageBackground source={require('../../../assets/img/circles.png')} style={styles.image}>
                            <Text style={styles.text}>Fundaciones</Text>
                        </ImageBackground>                   
                    </LinearGradient>  
                </Card>

                <Card >
                    <LinearGradient colors={['#243949','#08e5d2']} style={styles.linearGradient}>
                        <ImageBackground source={require('../../../assets/img/circles.png')} style={styles.image}>
                            <Text style={styles.text}>Tips para donar</Text>
                        </ImageBackground>                   
                    </LinearGradient>  
                </Card>        
                    
                
                                 
                {/* <LinearGradient colors={['#243949','#08e5d2']} style={styles.linearGradient}>
                <Text>Hola!</Text>
                <Text>Diego Alejandro Forero Pinzón</Text>
                
                <Content padder>
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
                <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>{title}</Text>
                    </CardItem>
                    <CardItem footer button onPress={() => alert("This is Card Footer")}>
                    <Text>{body}</Text>
                    </CardItem>
                </Card>  */}                   

                {/* <Card style={styles.cardPrincipal}>
                    <LinearGradient colors={['#243949','#000000']} style={styles.linearGradient}>
                        <ImageBackground source={require('../../../assets/img/circles.png')} style={styles.image}>
                            <Text style={styles.text}>Inside</Text>
                        </ImageBackground>                   
                    </LinearGradient>  
                </Card>
                <Card style={styles.cardPrincipal}>
                    <LinearGradient colors={['#243949','#08e5d2']} style={styles.linearGradient}>
                        <ImageBackground source={require('../../../assets/img/circles.png')} style={styles.image}>
                            <Text style={styles.text}>Inside</Text>
                        </ImageBackground>                   
                    </LinearGradient>  
                </Card>
                <Card style={styles.cardPrincipal}>
                    <LinearGradient colors={['#243949','#000000']} style={styles.linearGradient}>
                        <ImageBackground source={require('../../../assets/img/circles.png')} style={styles.image}>
                            <Text style={styles.text}>Inside</Text>
                        </ImageBackground>                   
                    </LinearGradient>  
                </Card>
                <Card style={styles.cardPrincipal}>
                    <LinearGradient colors={['#243949','#08e5d2']} style={styles.linearGradient}>
                        <ImageBackground source={require('../../../assets/img/circles.png')} style={styles.image}>
                            <Text style={styles.text}>Inside</Text>
                        </ImageBackground>                   
                    </LinearGradient>  
                </Card> */}
                
                {/* <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>{title}</Text>
                    </CardItem>
                    <CardItem footer button onPress={() => alert("This is Card Footer")}>
                    <Text>{body}</Text>
                    </CardItem>
                </Card> */}
                {/* <Image source={require('../../../assets/img/undraw_well_done.png')} style={{height: 400, width: null}}/> */}
                  
                {/* </Content> */}
                {/*  </LinearGradient>  */}
                {/* </LinearGradient> */}
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        color: 'black',
        textAlign : 'center',
        fontWeight: "bold",
    },
    textNote:{
        textAlign : 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center", 
    padding:40  
    },

    cardFirst:{
        marginTop:15
    }

})

export default CardDonante;