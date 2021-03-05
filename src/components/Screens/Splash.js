import React, { Component } from 'react';
import { Image, StyleSheet, ImageBackground,Text } from 'react-native';
import { Container, Title, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

class Splash extends Component {

  componentDidMount(){
      setTimeout(()=>{
        this.goLogin();
      },2000)
  }
  goLogin = () =>{
      this.props.navigation.navigate('Login')
  }  
  render() {
    return (
        // Within your render function
        <LinearGradient colors={['#517fa4', '#243949']} style={styles.linearGradient}>
            <Title style={styles.textD}>Donatón<Title style={styles.textA}>App</Title></Title>
            <Icon active name='home' style={styles.icon} />
        </LinearGradient>
            
        
    );
  }
}
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent:'center'
  },
  textD: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  textA: {
    color: "#08e5d2",
    fontSize: 33,
    fontWeight: "bold",
    textAlign: "center"
  },
  icon:{
    color: "#08e5d2",
    textAlign: "center"
  }
});

export default Splash;