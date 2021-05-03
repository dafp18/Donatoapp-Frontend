import React, {Component} from 'react';
import {Card,Text} from 'native-base';
import {View,Image,StyleSheet, Pressable} from 'react-native';

class CardSelectedCategory extends Component{
   
    render(){
        const {selectedItem,id,name,image, handleContinue} = this.props
        return (
                <View style={styles.container}>
                    <Pressable onPress={handleContinue} key={`cat_00_${id}`}>
                        <Card style={[styles.cardCategory, {backgroundColor: selectedItem == id ? "#517fa4" : "#fff"} ]}>
                            <Image
                                source={image} 
                                style={styles.imgCard}
                            />
                            <Text style={[styles.titleCard, {color: "#243949"}] }>{name}</Text>
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
        marginTop:10,
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
        marginTop:5,
        height: 100,
        width: 100,
        borderRadius:30
    },
    titleCard: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom:5
    }
    
})

export default CardSelectedCategory;