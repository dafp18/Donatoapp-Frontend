import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native';
import {Header,Body,Card,Text,Right,Button,Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import CardDonante from './CardDonante';


class HomeDonanteScreen extends Component {
    state={
        title: 'Donar',
        body: 'espacio para info',
    }
    
    render(){
        const {title, body} = this.state
        return(
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                            <Body>
                            <Text style={styles.text}> Bienvenido!</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                <Icon name="settings" style={{color:'#08e5d2'}} />
                                </Button>
                            </Right>
                        </Header>
                        <Card style={styles.cardTop}>
                            <CardDonante 
                                title={title}
                                body={body}
                                {...this.props}
                            />
                        </Card>
                    </View>
                </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    linearGradient: {
        flex: 1,
        justifyContent:'center'
    },
    cardTop: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop:20,
        borderTopLeftRadius: 100
    },
    text: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"    
    }
  });

export default HomeDonanteScreen;