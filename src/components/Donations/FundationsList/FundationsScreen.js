import React,{Component} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Header, Left, Button, Body, Title } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import CardFundation from './CardFundation';

class FundationsScreen extends Component {
    goHome = () => {
        this.props.navigation.navigate('Home')
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
                                <Title style={styles.textHeader}>Fundaciones</Title>
                            </Body>
                        </Header>
                        <View style={styles.cardBackground}>
                            <ScrollView>
                                <CardFundation/>
                                <CardFundation/>
                                <CardFundation/>
                                <CardFundation/>
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
    cardBackground: {
        flex: 1,
        backgroundColor: "white",
        marginTop:40,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    }
});

export default FundationsScreen;