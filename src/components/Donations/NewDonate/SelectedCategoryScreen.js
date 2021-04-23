import React, { Component } from 'react';
import {Header, Footer, Text, Button, Left,Body,Title} from "native-base";
import {StyleSheet,View,FlatList,Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Http from '../../../helpers/http';

import CardSelectedCategory from './CardSelectedCategory';

let numColumns = 2
class SelectedCategoryScreen extends Component {
    goDataDonation = () =>{
        this.props.navigation.navigate('DataDonation')
    }
    goHome = () =>{
        this.props.navigation.navigate('Home')
    }

    state={
        categoriesList:[]
    }

    componentDidMount () {
        this.getCategoriesList()
    } 

    getCategoriesList = async () =>{
        const resource = '/categories'
        const categoriesList = await Http.instance.get(resource)
        this.setState({categoriesList:categoriesList})
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
                                                                 handleContinue = {this.goDataDonation}
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