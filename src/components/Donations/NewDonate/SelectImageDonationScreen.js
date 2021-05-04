import React, { Component } from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Header, Left, Button, Body, Title, Text, Footer } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';

import SliderImages from './SliderImages';

class DataDonationScreen extends Component {
    state={
        imagesLoad: false,
        loadingBtnDonarAhora:false,
        bntSelectPhotos:'flex',
        bntDonarAhora:'none',
        imagesDonate : []
    }

    goSelectLocation = () =>{
        this.props.navigation.navigate('selectLocation')
    }

    finishDonate = () =>{
        this.props.navigation.navigate('Home')
        alert('Donación publicada correctamente!')
    }

    selectImages = () => {
        let imagesDonate = []
        ImagePicker.openPicker({
                    multiple: true
                }).then(images => {
                    images?.map(img => {
                        imagesDonate.push(img.path)
                    })
                    this.setState({imagesDonate, bntDonarAhora:'flex', bntSelectPhotos:'none', imagesLoad:true})
                });
    }

    render(){
        return(
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                            <Left>
                                <Button transparent onPress={this.goSelectLocation}>
                                <Icon name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                                </Button>
                            </Left>
                            <Body>
                                <Title style={styles.textHeader}>Seleccionar fotos</Title>
                            </Body>
                        </Header>
                        <View style={styles.cardBackground}>
                            
                            { !this.state.imagesLoad ? <Image source={require('../../../assets/img/undraw_moments.png')} style={{height: 300, width: 300}}/>
                                                     : <SliderImages dataImages={this.state.imagesDonate}/>
                            }   
                        </View>
                        
                            <Footer style={{backgroundColor: "#00bfa6" , borderTopColor:"#243949",borderTopWidth:3}}>
                                <Button transparent onPress={() => this.selectImages()} disabled={false} style={{display:this.state.bntSelectPhotos}}>
                                    <Text style={{color:'#fff',fontWeight:'bold',fontSize: 15}}>... Seleccionar fotos ...</Text>
                                </Button>
                                <Button transparent onPress={this.finishDonate} disabled={false} style={{display:this.state.bntDonarAhora}}> 
                                    <Text style={{color:'#243949',fontWeight:'bold'}}>Donar ahora!</Text>
                                    {   this.state.loadingBtnDonarAhora && <ActivityIndicator size="large" color="#243949" />  }
                                </Button>
                            </Footer>    
                    </View>
                </LinearGradient>
        )
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
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "white",
        marginTop:40,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    }
});

export default DataDonationScreen;