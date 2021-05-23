import React,{Component} from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Header, Left, Button, Body, Title, Right, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../../helpers/http';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Filters from './Filters';
import CardDonation from './CardDonation';

class HistoryDonationsScreen extends Component {
    state={
        user:null,
        statusDonations: [],
        donations:[],
        donationsFilters:[],
        selected: null,
        loading:true
    }
    componentDidMount ()  {
        this.getUserIdLogged()
    }

    getUserIdLogged = async () => {
        try {
            let user = await AsyncStorage.getItem('idUser')
            this.setState({user})
            this.getStatusDonations()
        } catch(e) {
            console.log(`Error obteniendo la key user para el historial de donaciones ${e}`)
        }   
    }

    getStatusDonations = async () =>{
        const resource = '/state_donations'
        const statusDonations = await Http.instance.get(resource)
        let obj = {
            id:40,
            name:'todas'
        }
        statusDonations.unshift(obj)
        this.setState({statusDonations})
        this.getDonations()
    }

    reload = () => {
        this.getDonations()
        this.getStatusDonations()
    }
    
    getDonations = async () =>{
        this.setState({loading:true})
        const resource = '/getProductsByUser'
        let body = {
            userId:this.state.user,
        }
        const donations = await Http.instance.post(resource, JSON.stringify(body))
        this.setState({donations, donationsFilters:donations, loading:false})
    }

    goHome = () => {
        this.props.navigation.navigate('Home')
    }

    onPressStatus = (id, statusName_) => {
        this.setState({selected: id});
        let donationsFilters = []
        if(this.state.donations.length > 0){
            if(statusName_ === 'todas'){
                donationsFilters = this.state.donations
            }else{
                donationsFilters = this.state.donations?.filter(d => d.state_donation === statusName_)
            }
            this.setState({donationsFilters})
        }
    }

    changeStatusDonation = async (idDonation, originState) => {
        this.setState({loading:true})
        let resource= ''
        if(originState === 'Activa'){
            resource = '/changeStatusInactiveProduct/'+idDonation
        }else{
            resource = '/changeStatusActiveProduct/'+idDonation
        }
        const dataUserDonante = await Http.instance.get(resource)
        if(dataUserDonante.Message === 'Actualizado'){
            this.getDonations()
        }
    }

    goEditDonation = (idDonation) => {
        this.props.navigation.navigate('EditDonation', idDonation)
    }

    render(){
        return(
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                            <Left>
                                <Button transparent onPress={this.goHome}>
                                <Icon_ name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                                </Button>
                            </Left>
                            <Body>
                                <Title style={styles.textHeader}>Historial donaciones</Title>
                            </Body>
                            <Icon name='refresh-outline' type="Ionicons" style={styles.iconHeader} onPress={this.reload}/>
                        </Header>
                        
                        <View style={styles.cardBackground}>
                        {   this.state.loading && <ActivityIndicator size="large" color="#08e5d2" style={{marginTop:20}} />  }
                            
                        {   this.state.loading ||   <FlatList
                                                        horizontal
                                                        showsHorizontalScrollIndicator={false}
                                                        extraData={this.state.statusDonations}
                                                        data={this.state.statusDonations}
                                                        keyExtractor={item => `itmFilter_${item.id}`}
                                                        renderItem={({item}) =>{
                                                            return      <Filters selected={this.state.selected}
                                                                                 keyItem={`itmFilter_${item.id}`}
                                                                                 onPressHandler={() => this.onPressStatus(`itmFilter_${item.id}`, item.name)}
                                                                                 name={item.name}   
                                                                        />                                            
                                                        }}   
                                                        
                                                    />
                        }

                        {   this.state.loading  ||  <FlatList
                                                        data={this.state.donationsFilters}
                                                        keyExtractor={item => `item_${item.id}`}
                                                        renderItem={({item}) =>{
                                                            return  <CardDonation   id={item.id} 
                                                                                    title={item.title}
                                                                                    image={item.url_image}
                                                                                    description={item.description}
                                                                                    quantity={item.quantity}
                                                                                    observation={item.observation}
                                                                                    created_at={item.created_at}
                                                                                    updated_at={item.updated_at}
                                                                                    category = {item.category}
                                                                                    state_product={item.state_product}
                                                                                    locality={item.locality} 
                                                                                    cantidad={null}
                                                                                    type={'HistorialDonaciones'}
                                                                                    state_donation={item.state_donation}
                                                                                    functions={() => this.changeStatusDonation(item.id, item.state_donation)}
                                                                                    fnEditDonation= {() => this.goEditDonation(item.id)}
                                                                    />       
                                                        }}   
                                                    />
                        }  
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
        marginTop:20,
        color:'#fff'
    },
    cardBackground: {
        flex: 1,
        backgroundColor: "white",
        marginTop:40,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    }
});

export default HistoryDonationsScreen;