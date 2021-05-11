import React, { Component } from 'react';
import { View, Image, ScrollView, StyleSheet, Alert} from 'react-native';
import { Header, Content, Card, CardItem, Text, Button, Icon, Left, Body, Title } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../helpers/http';

import SliderImages from '../Donations/NewDonate/SliderImages';

class DetalleDonacionScreen extends Component {
    state={
        /* imagesDonate: [ 'https://sc01.alicdn.com/kf/HTB1x5WKRFXXXXcQXXXXq6xXFXXXN/230053908/HTB1x5WKRFXXXXcQXXXXq6xXFXXXN.jpg',
                        'https://static.dafiti.com.co/p/frenezi-4819-840539-2-zoom.jpg',
                        'https://dafitistaticco-a.akamaihd.net/p/frenezi-4816-840539-1-zoom.jpg',
                        'https://cdn.wallapop.com/images/10420/ai/kj/__/c10420p635852912/i1995799071.jpg',
                        'https://cdn.wallapop.com/images/10420/ag/t0/__/c10420p632889416/i1984800397.jpg'                
        ] */
        id:null,
        imagesDonate:[],
        title:null,
        category:null,
        description: null,
        observation:null,
        stateName:null,
        quantity:null,
        locality:null
    }
    
    componentDidMount (){
        this.getDonationById()
    }
    
    getDonationById = async () => {
        let id = this.props.route.params,
            imagesDonate = []
        const resource = `/products/${id}`
        const donation = await Http.instance.get(resource)
        let handleStringImages = donation.url_image.split('|')
        handleStringImages?.map(img_url =>{
            if(img_url !== ''){ imagesDonate.push(Http.instance.BASE_URL_IMGS+img_url) }  
        })
        console.log(imagesDonate)
        this.setState({imagesDonate, id:donation.id, title:donation.name, category:donation.id_category,
                       description: donation.description, observation:donation.observation, stateName: donation.id_state_product,
                       quantity:donation.quantity, locality: donation.id_locality  
                    })
                 
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
                                        <Text>{this.state.title}</Text>
                                        <Text note>Categoria: {this.state.category}</Text>
                                      </Body>
                                  </CardItem>
                                  <CardItem cardBody>
                                      <SliderImages dataImages={this.state.imagesDonate}/>
                                    {/* <Image source={{uri: 'https://dafitistaticco-a.akamaihd.net/p/frenezi-4816-840539-1-zoom.jpg'}} style={{height: 200, width: null, flex: 1}}/> */}
                                  </CardItem>
                                  <CardItem>
                                      <Text>{this.state.description} {this.state.observation} </Text>  
                                  </CardItem>
                                  <CardItem>
                                      <Text style={{fontWeight:'bold'}}>Estado: </Text>
                                      <Text>{ this.state.stateName }</Text>
                                  </CardItem>
                                  <CardItem>
                                      <Text style={{fontWeight:'bold'}}>Cantidad: </Text>
                                      <Text>{ this.state.quantity }</Text>
                                  </CardItem>
                                  <CardItem>
                                      <Text style={{fontWeight:'bold'}}>Ubicación: </Text>
                                      <Text>{ this.state.locality }</Text>
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