import React from 'react';
import { Header, Body, Left, Button, Card, CardItem,Title} from 'native-base';
import { StyleSheet,Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardRegister from '../Login/CardRegister';

class RegisterScreen extends React.Component{
    goSelectRol = () => {
      this.props.navigation.navigate('SelectRol')
    }
    render(){
        return(
              <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                  <View style={styles.container}>
                      <Header transparent style={{backgroundColor:'#243949'}}>
                          <Left>
                              <Button transparent onPress={this.goSelectRol}>
                              <Icon name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                              </Button>
                          </Left>
                          <Body>
                              <Title style={styles.textHeader}>Registro de usuario</Title>
                          </Body>
                      </Header>
                      <View style={styles.cardBackground}>
                          <CardRegister {...this.props} />           
                      </View>
                  </View>     
              </LinearGradient>
        );
    }
}  

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent:'center'
  },
  container: {
    flex: 1, 
  },
  textHeader:{
    fontSize:20,
    marginTop:20
  },
  iconHeader:{
      marginTop:20
  },
  cardBackground: {
      flex: 1,
      backgroundColor: "white",
      marginTop:40,
      borderTopColor:'#517fa4',
      borderTopWidth:3
  }
});

export default RegisterScreen;