import React, { Component } from 'react';
import { View, StyleSheet,FlatList} from 'react-native';
import { Header, Body, Button, Title, Card, Left} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../helpers/http';

import Filters from '../Donations/History/Filters';
import CardDonation from '../Donations/History/CardDonation';

class ListDonacionesScreen extends Component {
    
    state={
        user:'dafp18@hotmail.com',
        donations:[],
        categories:[]
    }
    
    componentDidMount ()  {
        this.getDonations()
        this.getCategories() 
    }

    getDonations = async () =>{
        const resource = '/getProductsByUser'
        let body = {
            user:this.state.user,
            estado: 'Pendiente'
        }
        const donations = await Http.instance.post(resource, JSON.stringify(body))
        this.setState({donations})
    }

    getCategories = async () =>{
        const resource = '/categories'
        const categories = await Http.instance.get(resource)
        this.setState({categories})
    }

    onPressHandler(id) {
        this.setState({selected: id});
    }

    goHome = () => {
        this.props.navigation.navigate('Home')
    }

    goDetailDonation = () => {
        this.props.navigation.navigate('DetailDonacion')
    }

    render() {
          return (
                    <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                        <View style={styles.container}>
                            <Header transparent style={{backgroundColor:'#243949'}}>
                            <Left>
                                <Button transparent onPress={this.goHome}>
                                <Icon_ name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                                </Button>
                            </Left>
                            <Body>
                                <Title style={styles.textHeader}>Donaciones disponibles</Title>
                            </Body>
                            </Header>
                            <View style={styles.cardBackground}>
                                <FlatList
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    extraData={this.state.categories}
                                    data={this.state.categories}
                                    keyExtractor={item => `itmFilter_${item.id}`}
                                    renderItem={({item}) =>{
                                        return  <Filters selected={this.state.selected}
                                                         keyItem={`itmFilter_${item.id}`}
                                                         onPressHandler={() => this.onPressHandler(`itmFilter_${item.id}`)}
                                                         name={item.name}   
                                                />                                            
                                    }}   
                                    
                                />

                                <FlatList
                                    data={this.state.donations}
                                    keyExtractor={item => `item_${item.id}`}
                                    renderItem={({item}) =>{
                                        return  <CardDonation   id={item.id} 
                                                                title={item.title}
                                                                image={item.url_image}
                                                                description={item.description}
                                                                quantity={item.quantity}
                                                                observation={item.observation}
                                                                created_at={item.created_at}
                                                                category = {item.category}
                                                                state_product={item.state_product}
                                                                locality={item.locality}
                                                                cantidad={5}
                                                                type={'DonacionesDisponibles'}
                                                                functions={this.goDetailDonation} 
                                                />       
                                    }}   
                                />
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

export default ListDonacionesScreen;