import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Left, Body, Title, Card, CardItem, Button, Text, Footer } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const dataLocaties = [
    {id:'localidad_0001', title: 'Suba'},
    {id:'localidad_0002', title: 'Usme'},
    {id:'localidad_0003', title: 'Tunjuelito'},
    {id:'localidad_0004', title: 'Usaquen'},
    {id:'localidad_0005', title: 'Rafael uribe uribe'},
]
class selectLocationDonationScreen extends Component {
    prueba = () => {
        console.log('touch')
    }

    goDataDonation = () =>{
        this.props.navigation.navigate('DataDonation')
    }
    goSelectImages = () =>{
        this.props.navigation.navigate('SelectImageDonation')
    }
    render(){
        return(
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                        <Left>
                            <Button transparent onPress={this.goDataDonation}>
                            <Icon name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.textHeader}>Seleccionar ubicación</Title>
                        </Body>
                        </Header>
                        <View style={styles.cardBackground}>
                            { dataLocaties.map( l => {
                                return (
                                    <Card style={styles.cardLocality} key={l.id}>
                                        <CardItem button onPress={this.prueba}>
                                            <Text>{l.title}</Text>
                                        </CardItem>
                                    </Card>
                                )
                              })
                            }
                        </View>
                        <Footer style={styles.footerContainer}>
                            <Button transparent onPress={this.goSelectImages} disabled={false}>
                                <Text style={{color:'#243949',fontWeight:'bold'}}>Continuar</Text>
                            </Button>
                        </Footer>    
                    </View>
                </LinearGradient>      
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent:'center'
    },
    container: {
      flex: 1, 
    },
    textHeader:{
        fontSize:20,
        marginTop:20
    },
    iconHeader:{
        marginTop:20
    },
    cardBackground: {
        flex: 1,
        backgroundColor: "#f7f8fa",
        marginTop:40,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    },
    cardLocality:{
        marginTop:10,
        marginLeft:15,
        marginRight:15,
        borderTopColor:'#243949',
        borderTopWidth:3
    },
    footerContainer: {
        backgroundColor: "#f7f8fa",
        borderTopColor:'#517fa4',
        borderTopWidth:3,
        fontSize: 20
    }
});

export default selectLocationDonationScreen;