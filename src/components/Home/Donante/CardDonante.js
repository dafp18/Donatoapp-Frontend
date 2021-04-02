import React, { Component } from 'react';
import { Content, Card, Text} from "native-base";
import {Image, Pressable, StyleSheet} from 'react-native';

const MenusHomeDonante = [
    { title: 'Nueva donación',img: require('../../../assets/img/MenuDonar_.png')},
    { title: 'Historial donaciones',img: require('../../../assets/img/MenuHistorial_.png')},
    { title: 'Fundaciones',img: require('../../../assets/img/MenuFundaciones_.png')},
    { title: 'Tips para donar',img: require('../../../assets/img/TipsDonar_.png')},
]
class CardDonante extends Component {
    getprops = () => {
        console.log('upaleeeee')
        this.props.navigation.navigate('SelectCategory')
    }
    render(){
        console.log('props homeDonation')
        const { title, body } = this.props
        return(
            <Content padder>
                { MenusHomeDonante.map( (menu,i) =>{
                    return (
                        <Pressable onPress={this.getprops}>
                            <Card style={styles.cards} key={`menu_${i}`}>
                                <Image source={menu.img} style={styles.image}/>
                                <Text style={styles.titleCard}>{menu.title}</Text>                                           
                            </Card>
                        </Pressable>
                    )
                })}           
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        marginTop:10,
        marginLeft:10,
        height: 140,
        width: 140,
        borderRadius:50
    },
    titleCard: {
        color: "#243949",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center"  
    },
    cards:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:8,
        marginLeft:8,
        marginRight:8,
        borderRadius:5,
        borderTopColor:'#243949',
        borderTopWidth:3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    }

})

export default CardDonante;