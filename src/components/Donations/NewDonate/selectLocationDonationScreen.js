import React, { Component } from 'react';
import { View, StyleSheet,FlatList, TouchableOpacity, Pressable} from 'react-native';
import { Header, Left, Body, Title, Card, CardItem, Button,Right, Text} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../../helpers/http';

class selectLocationDonationScreen extends Component {

    state={
        bgColorFooter:false,
        btnContinuar: true,
        selectedItem: null,
        localitiesList: []
    }
    optionSelected = () => {
        
    }

    componentDidMount () {
        this.getCategoriesList()
    } 

    getCategoriesList = async () =>{
        const resource = '/localities'
        const localitiesList = await Http.instance.get(resource)
        this.setState({localitiesList:localitiesList})
    }

    onPressHandler(id) {
        console.log(id,'este es el id')
        this.setState({selectedItem: id});
        this.goSelectImages()
    }

    goDataDonation = () =>{
        this.props.navigation.navigate('DataDonation')
    }
    goSelectImages = () =>{
        this.props.navigation.navigate('SelectImageDonation')       
    }
    render(){
        const {bgColorFooter,btnContinuar,localitiesList} = this.state
        return(
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                        <Left>
                            <Button transparent onPress={this.goDataDonation}>
                            <Icon_ name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.textHeader}>Seleccionar ubicación</Title>
                        </Body>
                        </Header>
                        <View style={styles.cardBackground}>
                            <Card style={styles.cardLocality}>

                            <View>
                                <FlatList
                                    extraData={this.state.selectedItem} //Must implemented
                                    data={localitiesList}
                                    keyExtractor={item => item.id.toString()}
                                    renderItem={({item}) => (
                                        
                                            <CardItem  key={`loc_00_${item.id}`} style={{justifyContent:'space-between', backgroundColor: this.state.selectedItem === item.id.toString() ? '#517fa4' : '#fff'  }}>
                                                <Text onPress={() => this.onPressHandler(item.id.toString())} style={{fontSize:20,fontWeight:'bold',color:this.state.selectedItem === item.id.toString() ? '#fff' : '#243949', width:320, padding:5  }}>
                                                    <Icon_ active name='map-marker' size={22} color={this.state.selectedItem === item.id.toString() ? '#fff' : '#243949'}  /> {item.name}
                                                </Text>
                                                <Icon_ active name='chevron-right' size={15} color= {this.state.selectedItem === item.id.toString() ? '#fff' : '#243949'}  style={{marginRight:15}} />
                                            </CardItem>
                                    )}
                                />
                            </View>

                            
                            </Card>
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
    },
    cardLocality:{
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        borderTopColor:'#243949',
        borderTopWidth:3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    }

});

export default selectLocationDonationScreen;