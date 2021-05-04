import React, { Component } from 'react';
import { Card, CardItem, Text, Body, Badge, View } from "native-base";
import {Image,StyleSheet} from 'react-native';

class CardDonation extends Component {
    
    render(){
        const {id,title,image,created_at,category,state_product,locality} = this.props
        return(
                <Card style={styles.cardContainer} key={`dona_000${id+1}`}>
                    <CardItem>        
                        <Body>
                            <Text style={{ fontWeight: 'bold', fontSize:18}}>{title}</Text>
                            <Text note>Categoria: {category}</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody style={styles.cardBody}>
                        <Image source={{uri: image}} style={{height: 100, width: 100, marginLeft:10}}/>
                        <View style={{marginLeft:10}}>
                            <Text>Estado: {state_product}</Text>
                            <Text>Creado: {created_at.substring(0,19)} </Text>
                            <Text>Entregado: </Text>
                            <Text>Ubicación: {locality} </Text>
                            <Badge style={{ backgroundColor: '#243949', height:22 }}>
                                <Text style={{fontSize:13, color:'#fff'}}>Activo</Text>
                            </Badge>
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