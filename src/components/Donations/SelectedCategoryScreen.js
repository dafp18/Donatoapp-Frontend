import React, { Component } from 'react';
import {Header, Footer, Text, Button, Left,Body,Title} from "native-base";
import {StyleSheet,View,FlatList,Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import CardSelectedCategory from './CardSelectedCategory';

const dataCategories = [
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
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
    goDataDonation = () =>{
        this.props.navigation.navigate('DataDonation')
    }
    goHome = () =>{
        this.props.navigation.navigate('HomeDonante')
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
                                data={dataCategories}
                                renderItem={({item}) =>{
                                    return <CardSelectedCategory title={item.title}
                                                                 id={item.id}
                                                                 handleContinue = {this.goDataDonation}
                                    />
                                }} 
                                keyExtractor={item => item.id}
                                numColumns={numColumns}
                            />  
                        </View>
                        {/* <Footer style={styles.footerContainer}>
                            <Button block onPress={this.handleContinue} >
                                <Text>Continuar</Text>
                            </Button>
                        </Footer> */}
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
    },
    footerContainer: {
        backgroundColor: "#f7f8fa",
        borderTopColor:'#517fa4',
        borderTopWidth:3,
        fontSize: 20
    }
});

export default SelectedCategoryScreen;