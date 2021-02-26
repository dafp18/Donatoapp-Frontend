import React from 'react';
import {View,Text,Button,Pressable} from 'react-native';

class LoginScreen extends React.Component{
  
  handlePress = () => {
    console.log("hola", this.props);
    this.props.navigation.navigate('Home')
  }

  render(){
    return(
        <View>
          <Text>Login screen</Text>
          <Pressable onPress={this.handlePress}>
            <Text>Ir a detalle</Text>  
          </Pressable>
        </View>
    );
  }
}

export default LoginScreen;