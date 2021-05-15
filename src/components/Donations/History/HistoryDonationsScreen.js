import React,{Component} from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Header, Left, Button, Body, Title, Right, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../../helpers/http';

import Filters from './Filters';
import CardDonation from './CardDonation';
import { set } from 'react-native-reanimated';


class HistoryDonationsScreen extends Component {
    state={
        user:'dafp18@hotmail.com',
        statusDonations: [],
        donations:[],
        selected: null,
        statusName: null,
        loading:true
    }
    componentDidMount ()  {
        this.getDonations()
        this.getStatusDonations()
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
    }

    reload = () => {
        this.getDonations()
        this.getStatusDonations()
    }
    
    getDonations = async () =>{
        this.setState({loading:true})
        const resource = '/getProductsByUser'
        let body = {
            user:this.state.user,
            estado: this.state.statusName || '' 
        }
        const donations = await Http.instance.post(resource, JSON.stringify(body))
        this.setState({donations, loading:false})
    }

    goHome = () => {
        this.props.navigation.navigate('Home')
    }

    onPressHandler = (id, statusName_) => {
        let idItem = id.replace('itmFilter_', '')
        const status = this.state.statusDonations.filter(el => el.id === Number(idItem))
        if(status){ 
            this.setState({selected: id, statusName: statusName_ === 'todas' ? null : status[0].name}, () => this.getDonations())  
        }
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
                                                                                onPressHandler={() => this.onPressHandler(`itmFilter_${item.id}`, item.name)}
                                                                                name={item.name}   
                                                                        />                                            
                                                        }}   
                                                        
                                                    />
                        }

                        {   this.state.loading  ||  <FlatList
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
                                                                                    cantidad={null}
                                                                                    type={'HistorialDonaciones'}
                                                                                    state_donation={item.state_donation}
                                                                                    functions={null}
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