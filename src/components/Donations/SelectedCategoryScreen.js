import React, { Component } from 'react';
import {Header, Card, Text, Button,Body,Left,Icon} from "native-base";
import {Image,StyleSheet,View,FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CardSelectedCategory from './CardSelectedCategory';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Alimentos',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Juguetes',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Ortopedicos',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d67',
        title: 'Fourth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d89',
        title: 'Fourth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29',
        title: 'Fourth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e2',
        title: 'Fourth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e',
        title: 'Fourth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-1455',
        title: 'Electrodomesticos',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e2',
        title: 'Electrodomesticos',
    },
    
];

let numColumns = 2
class SelectedCategoryScreen extends Component {
    handleContinue = () =>{
        this.props.navigation.navigate('DataDonation')
    }
    render(){
        console.log(this.props, 'categorias')
        return(
                
                    <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                        <View style={styles.container}>
                            <Header transparent style={{backgroundColor:'#243949', justifyContent:'center', flexDirection:'row'}}>
                                <Left>
                                    <Button transparent style={{color:'#08e5d2'}}>
                                    <Icon name='arrow-back' />
                                    </Button>
                                    
                                </Left>
                                <Body>
                                    <Text style={styles.text}>Seleccionar categoria</Text>
                                </Body>
                            </Header>
                            <Card style={styles.cardTop}>
                            <FlatList
                                style={{margin:20}}
                                data={DATA}
                                renderItem={({item}) =>{
                                    return <CardSelectedCategory title={item.title}
                                                                 handleContinue = {this.handleContinue}
                                    />
                                }} 
                                keyExtractor={item => item.id}
                                numColumns={numColumns}
                            />
                                
                            </Card>
                        </View>
                    </LinearGradient>
                  
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    linearGradient: {
        flex: 1,
        justifyContent:'center'
    },
    cardTop: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop:20,
        borderTopLeftRadius:15,
        borderTopRightRadius:15       
    },
    text: {
        color: "white",
        fontSize: 20
    }
});

export default SelectedCategoryScreen;