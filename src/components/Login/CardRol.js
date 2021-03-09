import React, { Component } from 'react';
import { StyleSheet, View, Pressable, Image, Text } from 'react-native';
import { Content, Item, Icon, Label, Input, Button } from 'native-base';

class CardRol extends Component {
    sendRegisterScreen =(type) => {
        console.log(type)
        this.props.navigation.navigate('Register')
    }   
    render(){
        console.log(this.props)
        return(
                <Content padder style={{marginTop:30}}>
                    
                    <Pressable onPress={this.sendRegisterScreen}> 
                            <Image
                                style={{ height:170, width:170, marginBottom:15 }}
                                source={require('../../assets/img/user.png')}
                            />
                            <Text style={styles.textOpt} >Donante</Text>
                            </Pressable>

                            <Pressable onPress={this.sendRegisterScreen}> 
                            <Image
                                style={{ height:170, width:170, marginTop:10 }}
                                source={require('../../assets/img/fundation.png')}
                            />
                            <Text style={styles.textOpt}>Fundación</Text>
                            </Pressable>
                    
                </Content>
        )
    }
}

const styles = StyleSheet.create({
    textOpt:{
        color: "#243949",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }      
});

export default CardRol;