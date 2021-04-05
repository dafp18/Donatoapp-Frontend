import React, { Component } from 'react';
import { Card, CardItem, Text } from "native-base";
import {Image,StyleSheet} from 'react-native';

class CardFundation extends Component {
    
    render(){
        return(
                <Card style={styles.cardContainer}>
                    <Text style={styles.cardTitle}>Chaqueta azul talla 14</Text>
                    <CardItem cardBody style={styles.cardBody}>
                        <Image source={{uri: 'https://dafitistaticco-a.akamaihd.net/p/frenezi-4816-840539-1-zoom.jpg'}} style={{height: 100, width: 100}}/>
                            <Text style={styles.textDescription}>
                                Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                                Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.
                            </Text>
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
    cardTitle:{
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
        marginTop:10,
        marginBottom:10,
        color:'#243949'
    },
    cardBody:{
        flexDirection:'column',
        marginBottom:15
    },
    textDescription:{
        marginLeft:15
    }
})

export default CardFundation;