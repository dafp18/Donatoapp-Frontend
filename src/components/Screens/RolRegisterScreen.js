import React, { Component } from 'react';
import { Text, Header, Body, Card, Title, Left, Button } from 'native-base';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import CardRol from '../Login/CardRol';

class RolRegister extends Component {

    goLogin =() =>{
        this.props.navigation.navigate('Login')
    }
    
    render(){
        return(
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                            <Left>
                                <Button transparent onPress={this.goLogin}>
                                <Icon name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                                </Button>
                            </Left>
                            <Body>
                                <Title style={styles.textHeader}>Seleccionar usuario</Title>
                            </Body>
                        </Header>
                        <View style={styles.cardBackground}>
                            <CardRol {...this.props} />
                        </View>
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
    container:{
        flex : 1  
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
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "white",
        marginTop:40,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    }
})

export default RolRegister;