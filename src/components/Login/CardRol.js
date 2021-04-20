import React, { Component } from 'react';
import { StyleSheet, Pressable, Image, Text } from 'react-native';
import { Content } from 'native-base';

class CardRol extends Component {
    goRegister = rol => {
        this.props.navigation.navigate('Register', { rol })
    }   
    render(){
        return(
                <Content padder style={{marginTop:50}}>
                    <Pressable onPress={ () => this.goRegister('Donante')}> 
                        <Image
                            style={{ height:170, width:170, marginBottom:15 }}
                            source={require('../../assets/img/user.png')}
                        />
                        <Text style={styles.textOpt} >Donante</Text>
                    </Pressable>

                    <Pressable onPress={ () => this.goRegister('Fundacion')}> 
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