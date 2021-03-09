import React, { Component } from 'react';
import { Text, Header, Body, Card, Title } from 'native-base';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CardRol from '../Login/CardRol';

class RolRegister extends Component {
    
    render(){
        return(
                <LinearGradient colors={['#243949','#517fa4']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                            <Body>
                                <Text style={styles.text}> Seleccione su perfil</Text>
                            </Body>
                        </Header>
                        <Title style={styles.textD}>Donatón<Title style={styles.textA}>App</Title></Title>
                        <Card style={styles.cardTop}>
                            <CardRol {...this.props} />                            
                        </Card>
                    </View>        
                </LinearGradient>      
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1  
    },
    linearGradient: {
        flex: 1,
        justifyContent:'center'
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"    
    },
    cardTop: {
        flex: 2,
        backgroundColor: "#fff",
        marginTop:20,
        borderTopLeftRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    textD: {
        marginTop:20,
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        
    },
    textA: {
        marginTop:20,
        color: "#08e5d2",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default RolRegister;