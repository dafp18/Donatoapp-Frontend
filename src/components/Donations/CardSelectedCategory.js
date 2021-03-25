import React, {Component} from 'react';
import {Card,Text} from 'native-base';
import {View,Image,StyleSheet, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class CardSelectedCategory extends Component{
    render(){
        const {title,handleContinue} = this.props
        return (
                
                <View style={styles.viewContainer}>
                    <Pressable onPress={handleContinue}>
                        <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                            <Image
                                source={require('../../assets/img/undraw_city_life.png')} 
                                style={styles.imgstyle}
                            />
                            <Text style={styles.textCard}>{title}</Text>
                        </LinearGradient>
                    </Pressable>        
                </View>                
        )
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    },
    linearGradient: {
        flex: 1,
        padding:15,
        borderRadius: 20,
        margin:10,
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'  
    },
    imgstyle:{
        height: 100,
        width: 100,
        borderRadius:50
    },
    textCard: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 6   
    }
})

export default CardSelectedCategory;