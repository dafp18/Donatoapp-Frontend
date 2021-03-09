import React from 'react';
import { Header, Body, Tab, Tabs, Card, CardItem,Title, Icon} from 'native-base';
import { StyleSheet,Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CardRegister from '../Login/CardRegister';


class RegisterScreen extends React.Component{
  
  render(){
    
    return(
            <LinearGradient colors={['#243949','#517fa4']} style={styles.linearGradient}>
              <View style={styles.container}>
                <Header transparent style={{backgroundColor:'#243949'}}>
                    <Body>
                    <Text style={styles.text}> Registro de usuario</Text>
                    </Body>
                </Header>
                <Title style={styles.textD}>Donatón<Title style={styles.textA}>App</Title></Title>
                {/* <Icon active name='home' style={styles.icon} /> */}
                <Card style={styles.cardTop}>
                  <CardRegister {...this.props} />
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
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"    
  },
  textD: {
    marginTop:20,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  textA: {
    marginTop:20,
    color: "#08e5d2",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default RegisterScreen;