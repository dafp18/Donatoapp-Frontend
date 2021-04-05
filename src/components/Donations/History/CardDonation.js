import React, { Component } from 'react';
import { Card, CardItem, Text, Body, Row, View } from "native-base";
import {Image,StyleSheet} from 'react-native';

class CardDonation extends Component {
    
    render(){
        return(
                <Card style={styles.cardContainer}>
                    <CardItem>        
                        <Body>
                            <Text>Chaqueta azul talla 14</Text>
                            <Text note>Categoria: Ropa</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody style={styles.cardBody}>
                        <Image source={{uri: 'https://dafitistaticco-a.akamaihd.net/p/frenezi-4816-840539-1-zoom.jpg'}} style={{height: 100, width: 100}}/>
                        <View style={{marginLeft:10}}>
                            <Text>Estado: Nuevo</Text>
                            <Text>Fecha: 2021-03-01 </Text>
                            <Text>Fecha: 2021-03-01 </Text>
                            <Text>Fecha: 2021-03-01 </Text>
                        </View>   
                    </CardItem> 
                </Card>    
        )
    }
}

const styles = StyleSheet.create({
    cardContainer:{
        marginLeft:15,
        marginRight:15,
        marginTop:10,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    },
    cardBody:{
        marginBottom:15
    }
})

export default CardDonation;