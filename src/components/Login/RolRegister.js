import React, { Component } from 'react';
import { Form, Item, Input, Label, Card, CardItem, Content,Icon,Button, Text } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';

class RolRegister extends Component {
    state = {
        showNit:false
    }
    render(){
        return(
            <Content>
                    <Image source={require('../../assets/img/fundation.png')} style={{height: 180, width: null, flex: 1}}/>
                    <Text>Fundación</Text>
                    <Image source={require('../../assets/img/user.png')} style={{height: 180, width: null, flex: 1}}/>
                    <Text>Donante</Text>
            </Content>
        )
    }
}

export default RolRegister;