import React,{Component,createRef} from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList, ActivityIndicator } from 'react-native';
import { Header, Left, Button, Body, Right, Title, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../helpers/http';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CardDonation from '../Donations/History/CardDonation';
import ActionsSheetComponent from './ActionsSheetComponent';

const actionSheetRef = createRef();
class DonacionesAceptadasScreen extends Component {
    state={
        imageUserDonante:null,
        nameUserDonante:null,
        emailUserDonante:null,
        phoneUserDonante:null,
        user:null,
        donations:[],
        selected: null,
        loading:true,
        showDataUser:false
    }
    componentDidMount ()  {
        this.getUserLogged()
        this.getDonations()
    }

    getUserLogged = async () => {
        try {
            let user = await AsyncStorage.getItem('user')
            this.setState({user})
        } catch(e) {
            console.log(`Error obteniendo la key user para las donaciones aceptadas ${e}`)
        }   
    }
    
    getDonations = async () =>{
        const resource = '/getProductsAceptedAndProcessed'
        let body = {
            userTakeDonate:this.state.user,
            estado: 3
        }
        const donations = await Http.instance.post(resource, JSON.stringify(body))
        this.setState({donations, loading:false})
    }

    goHome = () => {
        this.props.navigation.goBack()
    }

    getDataUserDonante = async (idUser) => {
        const resource = '/getDataUserDonation/'+idUser
        const dataUserDonante = await Http.instance.get(resource)
        let imageUserDonante = dataUserDonante[0].image_url,
            nameUserDonante=`${dataUserDonante[0].name} ${dataUserDonante[0].lastname}`,
            emailUserDonante=dataUserDonante[0].email,
            phoneUserDonante=dataUserDonante[0].phone
        this.setState({dataUserDonante, imageUserDonante, nameUserDonante, emailUserDonante, phoneUserDonante, showDataUser:true})
        actionSheetRef.current?.show()
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
                                <Title style={styles.textHeader}>Donaciones aceptadas</Title>
                            </Body>
                            <Icon name='refresh-outline' type="Ionicons" color="#fff" style={styles.iconHeader} onPress={this.getDonations}/>
                        </Header>
                        
                        <View style={styles.cardBackground}>
                        {   this.state.loading && <ActivityIndicator size="large" color="#08e5d2" style={{marginTop:20}}/>  }

                        {   this.state.loading ||
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
                                                            updated_at={item.updated_at}
                                                            category = {item.category}
                                                            state_product={item.state_product}
                                                            locality={item.locality} 
                                                            cantidad={null}
                                                            type={'DonacionesAceptadas'}
                                                            functions={() => this.getDataUserDonante(item.id_user)}
                                            />       
                                }}   
                            />
                        }
                        </View>
                        { this.state.showDataUser &&    <ActionsSheetComponent actionSheetRef={actionSheetRef} 
                                                                               image={this.state.imageUserDonante}
                                                                               name={this.state.nameUserDonante}
                                                                               email={this.state.emailUserDonante}
                                                                               phone={this.state.phoneUserDonante}
                                                        />  
                        }
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

export default DonacionesAceptadasScreen;