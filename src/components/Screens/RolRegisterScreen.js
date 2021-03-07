import React, { Component } from 'react';
import { Form, Item, Input, Label, Card, CardItem, Content,Icon,Button, Text,Title, } from 'native-base';
import { View, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class RolRegister extends Component {
    state = {
        showNit:false
    }
    render(){
        return(
            <LinearGradient colors={['#243949','#517fa4']} style={styles.linearGradient}>
                <Content padder style={{marginTop:50}}>
               {/* <Card style={{width:200}}> */}
                    <Text style={styles.text}>Fundación</Text>
                    <Image source={require('../../assets/img/fundation.png')} style={styles.image}/>          
               {/* </Card>  */}
              {/* <View style={styles.container}> */}
                {/* <Card style={{width:200}}> */}
                    <Text style={styles.text}>Donante</Text>
                    <Image source={require('../../assets/img/undraw_profile_pic.png')} style={styles.image}/>
                {/* </Card> */}
                </Content>
                
                
                
               
              {/* </View> */}
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
    image: {
        flex: 1,
        resizeMode: "cover",
        alignItems:'center',
        height:200,
        width:200,
        borderRadius:100
    },
    text: {
        color: "#243949",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        
    }
})

export default RolRegister;