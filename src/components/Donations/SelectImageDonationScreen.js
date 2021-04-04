import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Header, Left, Button, Body, Title, Text, Footer } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

class DataDonationScreen extends Component {
    goSelectLocation = () =>{
        this.props.navigation.navigate('selectLocation')
    }

    finishDonate = () =>{
        this.props.navigation.navigate('HomeDonante')
        alert('Donación publicada correctamente!')
    }

    selectPhotos = () =>{
        console.log('elijo fotos')
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
                            <Image source={require('../../assets/img/undraw_moments.png')} style={{height: 300, width: 300}}/>
                        </View>
                        <Footer style={styles.footerContainer}>
                            <Button transparent onPress={this.selectPhotos} disabled={false}>
                                <Text style={{color:'#243949',fontWeight:'bold'}}>... Seleccionar fotos ...</Text>
                            </Button>
                            <Button transparent onPress={this.finishDonate} disabled={false} style={{display:'none'}}> 
                                <Text style={{color:'#243949',fontWeight:'bold'}}>Donar ahora</Text>
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
    },
    footerContainer: {
        backgroundColor: "#f7f8fa",
        borderTopColor:'#517fa4',
        borderTopWidth:3,
        fontSize: 20
    }
});

export default DataDonationScreen;