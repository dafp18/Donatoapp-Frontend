import React, { Component } from 'react';
import { Card, CardItem, Text, Body, Badge, View, Icon, Button } from "native-base";
import {Image,StyleSheet} from 'react-native';

class CardDonation extends Component {
    
    render(){
        const {id,title,image,created_at,category,state_product,cantidad,locality,type,functions} = this.props
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
                            { type === 'HistorialDonaciones' ? <Text>Entregado: </Text> : null }
                            { type === 'DonacionesDisponibles' ? <Text>Cantidad: {cantidad}</Text> : null}
                            
                            <Text>Ubicación: {locality} </Text>
                            { type === 'HistorialDonaciones' ? <Badge style={{ backgroundColor: '#243949', height:22 }}>
                                                                    <Text style={{fontSize:13, color:'#fff'}}>Activo</Text>
                                                                </Badge>
                                                             :  null
                            }

                            { type === 'DonacionesDisponibles'  ?   <Card style={ [styles.cardFirst, { borderBottomColor: '#243949'}] }>
                                                                        <Icon active name='eye-outline' style={{fontSize:20}} />
                                                                        <Text onPress={functions}
                                                                              style={{color:'#243949', fontSize:18, marginLeft:5, marginRight:5, fontWeight:'bold'}}>Ver detalles</Text>
                                                                    </Card>  
                                                                :  null
                            }                         
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
    },
    cardFirst:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:5,
        marginLeft:10,
        marginRight:5,
        height:35,
        borderRadius:10,
        borderColor:'#243949',
        borderBottomWidth:3
    }
})

export default CardDonation;