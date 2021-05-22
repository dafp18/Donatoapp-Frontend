import React, { Component } from 'react';
import { Card, CardItem, Text, Body, Badge, View, Icon, Button } from "native-base";
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image'

class CardDonation extends Component {
    
    render(){
        const {id,title,image,updated_at,created_at,category,state_product,quantity,locality,type,functions,textBadge,state_donation,changeStatus, fnEditDonation} = this.props
        let colorBagde = '#243949'
        if(state_donation === 'Entregada'){
            colorBagde = '#08e5d2'
        }
        if(state_donation === 'Desactivada'){
            colorBagde = '#ff6584'
        }
        if(state_donation === 'En proceso'){
            colorBagde = '#517fa4'
        }
        
        return(
                <Card style={styles.cardContainer} key={`dona_000${id+1}`}>
                    <CardItem>        
                        <Body>
                            <Text style={{ fontWeight: 'bold', fontSize:18}}>{title}</Text>
                            <Text note>Categoria: {category}</Text>
                        </Body>
                        { state_donation === 'Activa' && <Icon active name='create-outline' style={{fontSize:25}} onPress={fnEditDonation} /> }
                        
                    </CardItem>
                    <CardItem cardBody style={styles.cardBody}>
                        <FastImage   
                            source=  { !image ? require('../../../assets/img/imageLoading.png') : {uri: image }}
                            style={{ width: 120, height: 120, marginLeft:10 }}
                        />
                        {/* <Image source={{uri: image}} style={{height: 120, width: 120, marginLeft:10}}/> */}
                        <View style={{marginLeft:10}}>
                            <Text>Estado: {state_product}</Text>
                            <Text>Creado: {created_at.substring(0,19)} </Text>
                            { ((type === 'HistorialDonaciones' || type === 'DonacionesAceptadas') && state_donation === 'Entregada') ? <Text>Entregado: {updated_at?.substring(0,10)}</Text> : null }
                            <Text>Cantidad: {quantity}</Text>
                            <Text>Ubicación: {locality} </Text>
                            {   type === 'HistorialDonaciones'  ?   <Badge style={{ backgroundColor: colorBagde, height:22, marginTop:5 }}>
                                                                        <Text style={{fontSize:13, color:'#fff'}}>{state_donation}</Text>
                                                                    </Badge>
                                                                :   null
                            }

                            {   type === 'DonacionesAceptadas'  ?   <Badge style={{ backgroundColor: '#08e5d2', height:22, marginTop:5 }}>
                                                                        <Text style={{fontSize:13, color:'#243949'}}>Recibida</Text>
                                                                    </Badge>
                                                                :   null
                            }

                            {   type === 'DonacionesDisponibles'  ? <Card style={ [styles.btn, { borderBottomColor: '#243949'}] }>
                                                                        <Icon active name='eye-outline' style={{fontSize:20}} />
                                                                        <Text onPress={functions}
                                                                              style={{color:'#243949', fontSize:18, marginLeft:5, marginRight:5, fontWeight:'bold'}}>Ver detalles</Text>
                                                                    </Card>  
                                                                :   null
                            }

                            {   type === 'HistorialDonaciones' && state_donation === 'Activa'   ?   <Card style={ [styles.btn, { borderBottomColor: '#243949'}] }>
                                                                                                        <Icon active name='close-circle-outline' type='Ionicons' style={{fontSize:22}} />
                                                                                                        <Text onPress={functions}
                                                                                                            style={{color:'#243949', fontSize:18, marginLeft:5, marginRight:5, fontWeight:'bold'}}>Desactivar</Text>
                                                                                                    </Card>  
                                                                                                :   null
                            }

                            {   type === 'HistorialDonaciones' && state_donation === 'Desactivada'  ?   <Card style={ [styles.btn, { borderBottomColor: '#243949'}] }>
                                                                                                            <Icon active name='checkmark-circle-outline' type='Ionicons' style={{fontSize:22}} />
                                                                                                            <Text onPress={functions}
                                                                                                                style={{color:'#243949', fontSize:18, marginLeft:5, marginRight:5, fontWeight:'bold'}}>Activar</Text>
                                                                                                        </Card>  
                                                                                                    :   null
                            }

                            {   type === 'DonacionesTramite'    ?   <Card style={ [styles.btnRecieve, { borderBottomColor: '#00bfa6', backgroundColor:'#08e5d2'}] }>
                                                                        <Icon active name='checkmark-circle-outline' style={{fontSize:20}} />
                                                                        <Text onPress={changeStatus}
                                                                              style={{color:'#243949', fontSize:18, marginLeft:5, marginRight:5, fontWeight:'bold'}}>Recibida</Text>
                                                                    </Card>  
                                                                :   null
                            }

                            {   type === 'DonacionesTramite'    
                              ||type === 'DonacionesAceptadas'  ?   <Card style={ [styles.btn, { borderBottomColor: '#243949', marginTop:5}] }>
                                                                      <Icon active name='eye-outline' style={{fontSize:20}} />
                                                                        <Text onPress={functions}
                                                                              style={{color:'#243949', fontSize:18, marginLeft:5, marginRight:5, fontWeight:'bold'}}>Datos donante</Text>
                                                                    </Card>  
                                                                :   null
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
    btn:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginLeft:10,
        marginRight:5,
        height:35,
        borderRadius:10,
        borderColor:'#243949',
        borderBottomWidth:3
    },
    btnRecieve:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginLeft:10,
        marginRight:5,
        marginTop:10,
        height:35,
        borderRadius:10,
        borderColor:'#243949',
        borderBottomWidth:3
    }

})

export default CardDonation;