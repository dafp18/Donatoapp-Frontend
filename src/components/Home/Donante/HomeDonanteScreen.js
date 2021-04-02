import React, { Component } from 'react';
import {View,StyleSheet,Image} from 'react-native';
import {Header,Card,Text,Right,Button,Icon,Title,Body} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import CardDonante from './CardDonante';

class HomeDonanteScreen extends Component {
    state={}
    render(){
        return(
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                            <Body>
                                <Title style={styles.textHeader}>Inicio</Title>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Icon name='menu' style={styles.iconHeader} />
                                </Button>
                            </Right>
                        </Header>
                        <View style={styles.cardBackground}>
                            <Card style={styles.cardFirst}>
                                <Image source={require('../../../assets/img/undraw_city_life.png')} style={{height: 100, width: 350, marginTop:5, marginLeft:30}}/>
                                <Title style={styles.titleCardFirst}>Diego Alejandro Forero Pinzón</Title>
                                <Text note style={styles.textNoteCardFirst}>Último ingreso: 2021/05/31 03:00:05 pm</Text>
                            </Card>
                            <CardDonante
                                {...this.props}
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
        marginTop:20,
        marginLeft:145
    },
    iconHeader:{
        marginTop:20,
        fontSize:30
    },
    cardBackground: {
        flex: 1,
        backgroundColor: "#f7f8fa",
        marginTop:40,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    },
    cardFirst:{
        borderRadius:5,
        borderColor:'#fff',
        borderTopColor:'#517fa4',
        borderTopWidth:3,
        borderTopColor:'#517fa4'
    },
    titleCardFirst:{
        color: 'black',
        textAlign : 'center',
        fontWeight: "bold",
    },
    textNoteCardFirst:{
        textAlign : 'center',
        marginBottom:5
    }
});

export default HomeDonanteScreen;