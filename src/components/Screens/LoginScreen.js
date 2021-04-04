import React from 'react';
import { Title } from 'native-base';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CardLogin from '../Login/CardLogin';

class LoginScreen extends React.Component{
  
  render(){
    
    return(
            <LinearGradient colors={['#243949','#517fa4']} style={styles.linearGradient}>
              <View style={styles.container}>
                <Title style={styles.textD}>Donatón<Title style={styles.textA}>App</Title></Title>
                <View style={styles.cardBackground}>
                  <CardLogin {...this.props} />
                </View>  
              </View>
            </LinearGradient>
          );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  cardBackground: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 100,
    marginTop:40,
    borderTopColor:'#517fa4',
    borderTopWidth:3
  },
  linearGradient: {
    flex: 1,
    justifyContent:'center'
  },
  textD: {
    marginTop:20,
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  textA: {
    marginTop:20,
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

export default LoginScreen;