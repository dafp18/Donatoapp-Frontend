import React, { Component } from 'react';
import { Content, Card, Text} from "native-base";
import {Image, Pressable, StyleSheet} from 'react-native';

class CardHome extends Component {
    
    goScreen = (screen) => {
        this.props.navigation.navigate(screen)
    }
    render(){
        console.log('props homeDonation')
        const { title, body } = this.props
        return(
            <Content padder style={{marginTop:95 ,backgroundColor:'#dadbdd', borderRadius:80}}>
                { this.props.route.params.menus.map( (menu,i) =>{
                    return (
                        <Pressable onPress={ () => this.goScreen(menu.goScreen)} key={menu.id}>
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
        fontSize: 19,
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

export default CardHome;