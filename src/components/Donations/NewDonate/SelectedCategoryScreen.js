import React, { Component } from 'react';
import {Header, Button, Left,Body,Title} from "native-base";
import {StyleSheet,View,FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Http from '../../../helpers/http';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CardSelectedCategory from './CardSelectedCategory';

let numColumns = 2
class SelectedCategoryScreen extends Component {
    state={
        categoriesList:[]
    }

    goDataDonation = async (category, idCategory) =>{
        try {
            await AsyncStorage.setItem('idCategory', idCategory.toString())
        } catch (e) {
            console.log(`error setItem idCategory: ${e}`)
        }
        this.props.navigation.navigate('DataDonation', {category})
    }
    goHome = () =>{
        this.props.navigation.goBack()
    }

    componentDidMount () {
        this.getCategoriesList()
    } 

    getCategoriesList = async () =>{
        const resource = '/categories'
        const categoriesList = await Http.instance.get(resource)
        categoriesList?.map(cat => {
            if(cat.name === 'Ropa'){ cat.image = require('../../../assets/img/imgCat_Ropa.png') }
            if(cat.name === 'Muebles'){ cat.image = require('../../../assets/img/imgCat_Muebles.png') }
            if(cat.name === 'Alimentos'){ cat.image = require('../../../assets/img/imgCat_Comida.png') }
            if(cat.name === 'Juguetes'){ cat.image = require('../../../assets/img/imgCat_Juguetes.png') }
            if(cat.name === 'Ortopedicos'){ cat.image = require('../../../assets/img/imgCat_Ortopedicos.png') }
            if(cat.name === 'Libros'){ cat.image = require('../../../assets/img/imgCat_Libros.png') }
            if(cat.name === 'Electrodomesticos'){ cat.image = require('../../../assets/img/imgCat_Electrodomesticos.png') }
        })
        this.setState({categoriesList})
    }

    render(){
        return(
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                        <Left>
                            <Button transparent onPress={this.goHome}>
                            <Icon name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.textHeader}>Seleccionar categoría</Title>
                        </Body>
                        </Header>
                        <View style={styles.cardBackground}>
                            <FlatList
                                style={{margin:20}}
                                data={this.state.categoriesList}
                                renderItem={({item}) =>{
                                    return <CardSelectedCategory id={item.id}
                                                                 name={item.name}
                                                                 image={item.image} 
                                                                 handleContinue = {() => this.goDataDonation(item.name, item.id)}
                                    />
                                }} 
                                keyExtractor={item => item.id}
                                numColumns={numColumns}
                            />  
                        </View>
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
        backgroundColor: "#f7f8fa",
        marginTop:40,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    }
});

export default SelectedCategoryScreen;