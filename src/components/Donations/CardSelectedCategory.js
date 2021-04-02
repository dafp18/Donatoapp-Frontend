import React, {Component} from 'react';
import {Card,Text} from 'native-base';
import {View,Image,StyleSheet, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class CardSelectedCategory extends Component{
    render(){
        const {title,id,handleContinue} = this.props
        return (
                <View style={styles.container}>
                    <Pressable onPress={handleContinue}>
                        <Card style={styles.cardCategory} key={id}>
                            <Image
                                source={require('../../assets/img/undraw_city_life.png')} 
                                style={styles.imgCard}
                            />
                            <Text style={styles.titleCard}>{title}</Text>
                        </Card>                       
                    </Pressable>        
                </View>                
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardCategory:{
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
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
    },
    imgCard:{
        height: 100,
        width: 100,
        borderRadius:50
    },
    titleCard: {
        color: "#243949",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom:5
    }
    
})

export default CardSelectedCategory;