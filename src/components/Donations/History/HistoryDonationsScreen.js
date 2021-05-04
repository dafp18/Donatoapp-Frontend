import React,{Component} from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList, Pressable } from 'react-native';
import { Header, Left, Button, Body, Card, Title, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../../helpers/http';

import CardDonation from './CardDonation';

class HistoryDonationsScreen extends Component {
    state={
        user:'dafp18@hotmail.com',
        statusDonations: [],
        myDonations:[],
        statusSelected : null
    }
    componentDidMount ()  {
        this.getStatusDonations()
        this.getMyDonations()
    }

    getStatusDonations = async () =>{
        const resource = '/state_donations'
        const stateDonations = await Http.instance.get(resource)
        console.log(stateDonations, 'estados')
        this.setState({statusDonations:stateDonations})
    }
    
    getMyDonations = async () =>{
        const resource = '/getProductsByUser'
        let body = {
            user:this.state.user,
            estado: 'Pendiente'
        }
        const donations = await Http.instance.post(resource, JSON.stringify(body))
        console.log(donations, 'donaciones')
        this.setState({myDonations:donations})
    }

    goHome = () => {
        this.props.navigation.navigate('Home')
    }

    onPressHandler(id) {
        this.setState({statusSelected: id});
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
                        </Header>
                        
                        <View style={styles.cardBackground}>
                            <View>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                extraData={this.state.statusDonations}
                                data={this.state.statusDonations}
                                keyExtractor={item => `status_${item.id}`}
                                renderItem={({item}) =>{
                                    return      <Card style={ [styles.cardFirst, { borderBottomColor: this.state.statusSelected === `status_${item.id}` ? '#243949' :'#86cbbd'}] }>
                                                    <Icon active name='happy-outline' style={{fontSize:20,marginLeft:5}} />
                                                    <Text onPress={()=>this.onPressHandler(`status_${item.id}`)} 
                                                          style={{color:'#243949', fontSize:18, marginLeft:5, marginRight:5, fontWeight:this.state.statusSelected  === `status_${item.id}` ? 'bold': 'normal'}}>{item.name} </Text>
                                                </Card>
                                            
                                }}   
                                
                            />
                                
                            </View>
                            <ScrollView>
                                { this.state.myDonations?.map( donation => {
                                    return <CardDonation id={donation.id} 
                                                         title={donation.title}
                                                         image={donation.url_image}
                                                         description={donation.description}
                                                         quantity={donation.quantity}
                                                         observation={donation.observation}
                                                         created_at={donation.created_at}
                                                         category = {donation.category}
                                                         state_product={donation.state_product}
                                                         locality={donation.locality} 
                                                         />
                                  })
                                } 
                            </ScrollView>
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
    cardFirst:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10,
        marginLeft:10,
        marginRight:5,
        height:40,
        borderRadius:10,
        borderColor:'#86cbbd',
        borderBottomWidth:3
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