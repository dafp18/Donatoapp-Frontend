import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, Icon } from 'native-base';

class Filters extends Component {
    render(){
        return (
                    <Card style={ [styles.cardFirst, { borderBottomColor: this.props.selected === this.props.keyItem ? '#243949' :'#86cbbd'}] }>
                        <Icon active name='happy-outline' style={{fontSize:20,marginLeft:5}} />
                        <Text onPress={this.props.onPressHandler} 
                            style={{color:'#243949', fontSize:18, marginLeft:5, marginRight:5, fontWeight:this.props.selected  === this.props.keyItem ? 'bold': 'normal'}}>{this.props.name} </Text>
                    </Card>
        )              
    }
}

const styles = StyleSheet.create({
    cardFirst:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10,
        marginLeft:10,
        marginRight:5,
        height:40,
        borderRadius:10,
        borderColor:'#86cbbd',
        borderBottomWidth:3
    }
    
})

export default Filters;


