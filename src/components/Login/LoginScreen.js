import React from 'react';
import { Container, Content, Tab, Tabs, Card, CardItem,Title, Icon} from 'native-base';
import { StyleSheet,Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CardLogin from './CardLogin';
//import RolRegister from './RolRegister';
import CardRegister from './CardRegister';


class LoginScreen extends React.Component{
  
  
  render(){
    
    return(
            <LinearGradient colors={['#243949','#517fa4']} style={styles.linearGradient}>
              <View style={styles.container}>
                <Title style={styles.textD}>Donatón<Title style={styles.textA}>App</Title></Title>
                {/* <Icon active name='home' style={styles.icon} /> */}
                <Card style={styles.cardTop}>
                  <CardLogin {...this.props} />
                </Card>
              </View>
            </LinearGradient>
          );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  cardTop: {
    flex: 2,
    backgroundColor: "#fff",
    /* borderWidth: 20, */
    marginTop:20,
    borderTopLeftRadius: 100,
    
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