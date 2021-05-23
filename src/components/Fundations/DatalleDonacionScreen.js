import React, { Component } from 'react';
import { View, ActivityIndicator, ScrollView, StyleSheet, Alert} from 'react-native';
import { Header, Card, CardItem, Text, Button, Icon, Left, Body, Title } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../helpers/http';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SliderImages from '../Donations/NewDonate/SliderImages';

class DetalleDonacionScreen extends Component {
    state={
        disableBtnLoQuiero:false,
        loading:false,
        loadingData:true,
        id:null,
        imagesDonate:[],
        title:null,
        category:null,
        description: null,
        observation:null,
        stateName:null,
        quantity:null,
        locality:null,
        idUserLogged:null
    }
    
    componentDidMount (){
        this.getIdUserLogged()
        this.getDonationById()
    }
    
    getIdUserLogged = async () => {
        try {
            let idUserLogged = Number(await AsyncStorage.getItem('idUser'))
            this.setState({idUserLogged})
        } catch(e) {
            console.log(`Error obteniendo la key idUser para el detalle donacion ${e}`)
        }   
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
        this.setState({imagesDonate, id:donation.id, title:donation.name, category:donation.id_category,
                       description: donation.description, observation:donation.observation, stateName: donation.id_state_product,
                       quantity:donation.quantity, locality: donation.id_locality, loadingData:false  
                    })
                 
    }
    
    goDonations = () =>{
        this.props.navigation.goBack()
    }

    goHome = () =>{
        this.props.navigation.navigate('Home')
    }

    takeDonation = async (idProduct) => {
        this.setState({disableBtnLoQuiero:true, loading:true})
        const resource = '/separateProduct'
        const body = {
            idProduct,
            idUser:this.state.idUserLogged
        }
        const separateDonation = await Http.instance.post(resource, JSON.stringify(body))
        if(separateDonation.Message === 'Actualizado'){
            this.setState({loading:false})
            Alert.alert(
                "FELICITACIONES!",
                "Ponte en contacto con el donante para coodinar la entrega, revisa la sección donaciones en trámite para ver la información de contacto.",
                [ {text: "OK", onPress: () => this.goHome() } ],
                {cancelable: true}
            );
        }else{
            Alert.alert(
                "ERROR!",
                "Ha ocurrido un error, por favor inténtelo nuevamente",
                [ {text: "OK", onPress: () => this.goDonations() } ],
                {cancelable: true}
            );
        }
        
        
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
                            {   this.state.loadingData && <ActivityIndicator size="large" color="#08e5d2" style={{marginTop:20}} />  }

                            {  this.state.loadingData ||
                                                        <ScrollView>
                                                            <CardItem >
                                                                <Body>
                                                                    <Text style={{fontWeight:'bold', fontSize:20}}>{this.state.title}</Text>
                                                                    <Text note>Categoria: {this.state.category}</Text>
                                                                </Body>
                                                            </CardItem>

                                                            <CardItem cardBody>
                                                                <SliderImages dataImages={this.state.imagesDonate}/>
                                                            </CardItem>                                                          
                                                            
                                                            <CardItem style={{marginTop:20}}>
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
                                                            <Button block style={{ marginLeft:20, marginRight:20, marginTop:20, marginBottom:20,   backgroundColor: this.state.disableBtnLoQuiero ? '#667580' : '#243949', borderRadius:5}} disable={this.state.disableBtnLoQuiero} onPress={() => this.takeDonation(this.state.id)}>
                                                                <Text>Lo quiero!</Text>
                                                                {   this.state.loading && <ActivityIndicator size="large" color="#08e5d2" />  }
                                                            </Button>    
                                                        </ScrollView>    
                            }
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