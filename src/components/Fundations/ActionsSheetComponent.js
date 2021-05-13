import React, { Component  } from 'react';
import {View,StyleSheet,Image, Dimensions,Linking} from 'react-native';
import {Text,Title, Icon} from 'native-base';
import ActionSheet from "react-native-actions-sheet";

const {width} = Dimensions.get('window');
const height = width * 0.85; 
class ActionsSheetComponent extends Component {
    
    render(){
        return(
                <View>
                    <ActionSheet ref={this.props.actionSheetRef} 
                                    gestureEnabled={true}  
                                    containerStyle={styles.containerActionSheet} 
                                    indicatorColor="#243949"
                    >
                        <View style={{width, height}}>
                            <Image source={{uri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.image}/>
                            <Title style={{color:'#243949', marginTop:10, textAlign:'center', fontSize:25}} >Diego Alejandro Forero Pinzon</Title>
                            <View style={{flexDirection:'row', paddingVertical:15, paddingHorizontal:30, marginTop:15}}>
                                <Icon name='mail-outline' type="Ionicons" style={{ color:'#243949', fontSize:25}} />
                                <Text style={styles.text} onPress={()=> Linking.openURL(`mailto:dafp18@hotmail.com`)}>dafpp18@hotmail.com</Text>
                            </View>

                            <View style={{flexDirection:'row', paddingVertical:15, paddingHorizontal:30}}>
                                <Icon name='call-outline' type="Ionicons" style={{color:'#243949', fontSize:25}} />
                                <Text style={styles.text} onPress={() => Linking.openURL(`tel:3134277958`)}>3134277958</Text>
                            </View>   
                        </View>
                    </ActionSheet>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    containerActionSheet:{
        flex: 1,
        justifyContent:'center',
        backgroundColor:"#fff",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderTopColor:'#243949',
        borderTopWidth:3,
        padding:8       
    },
    image:{
        height: 120,
        width: 120,
        borderRadius:60,
        marginLeft:10,
        marginTop:25,
        alignSelf:'center'
    },
    text:{
        marginLeft:15,
        fontSize:18,
        color:'#517fa4',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default ActionsSheetComponent;