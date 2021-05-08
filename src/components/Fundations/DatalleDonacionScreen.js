import React, { Component } from 'react';
import { View, Image, ScrollView, StyleSheet, Alert} from 'react-native';
import { Header, Content, Card, CardItem, Text, Button, Icon, Left, Body, Title } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../helpers/http';

import SliderImages from '../Donations/NewDonate/SliderImages';

class DetalleDonacionScreen extends Component {
  state={
      imagesDonate: [ 'https://sc01.alicdn.com/kf/HTB1x5WKRFXXXXcQXXXXq6xXFXXXN/230053908/HTB1x5WKRFXXXXcQXXXXq6xXFXXXN.jpg',
                      'https://static.dafiti.com.co/p/frenezi-4819-840539-2-zoom.jpg',
                      'https://dafitistaticco-a.akamaihd.net/p/frenezi-4816-840539-1-zoom.jpg',
                      'https://cdn.wallapop.com/images/10420/ai/kj/__/c10420p635852912/i1995799071.jpg',
                      'https://cdn.wallapop.com/images/10420/ag/t0/__/c10420p632889416/i1984800397.jpg'                
      ]
  }
  goDonations = () =>{
      this.props.navigation.goBack()
  }

  takeDonation = () => {
      Alert.alert(
        "FELICITACIONES!",
        "Ponte en contacto con el donante para coodinar la entrega, revisa la sección donaciones en trámite para ver la información de contacto.!",
        [ {text: "OK", onPress: () => this.goDonations() } ],
        {cancelable: true}
    );
    
  }
    render() {
        return (
                  <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                      <View style={styles.container}>
                          <Header transparent style={{backgroundColor:'#243949'}}>
                          <Left>
                              <Button transparent onPress={this.goDonations}>
                              <Icon_ name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                              </Button>
                          </Left>
                          <Body>
                              <Title style={styles.textHeader}>Detalle de la donación</Title>
                          </Body>
                          </Header>
                          <View style={styles.cardBackground}>
                              <ScrollView>
                                  <CardItem>
                                      <Body>
                                        <Text>Chaqueta azul talla 14</Text>
                                        <Text note>Categoria: Ropa</Text>
                                      </Body>
                                  </CardItem>
                                  <CardItem cardBody>
                                      <SliderImages dataImages={this.state.imagesDonate}/>
                                    {/* <Image source={{uri: 'https://dafitistaticco-a.akamaihd.net/p/frenezi-4816-840539-1-zoom.jpg'}} style={{height: 200, width: null, flex: 1}}/> */}
                                  </CardItem>
                                  <CardItem>
                                      <Text>Chaqueta azul talla M poco uso de niño se regala porque ya se le quedó
                                      Chaqueta azul talla M poco uso de niño se regala porque ya se le quedó
                                      Chaqueta azul talla M poco uso de niño se regala porque ya se le quedó
                                      Chaqueta azul talla M poco uso de niño se regala porque ya se le quedó
                                      Chaqueta azul talla M poco uso de niño se regala porque ya se le quedó  
                                      </Text>  
                                  </CardItem>
                                  <CardItem>
                                      <Text style={{fontWeight:'bold'}}>Estado: </Text>
                                      <Text>Usado</Text>
                                  </CardItem>
                                  <CardItem>
                                      <Text style={{fontWeight:'bold'}}>Cantidad: </Text>
                                      <Text>1</Text>
                                  </CardItem>
                                  <CardItem>
                                      <Text style={{fontWeight:'bold'}}>Ubicación: </Text>
                                      <Text>Suba</Text>
                                  </CardItem>
                                  <Button block style={{ marginLeft:20, marginRight:20, marginTop:20, marginBottom:20, backgroundColor:'#243949', borderRadius:5}} onPress={this.takeDonation}>
                                      <Text>Lo quiero!</Text>
                                  </Button>    
                              </ScrollView>    
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
      backgroundColor: "#f7f8fa",
      marginTop:40,
      borderTopColor:'#517fa4',
      borderTopWidth:3
  }
});

export default DetalleDonacionScreen;