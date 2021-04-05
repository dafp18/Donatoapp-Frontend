import React, { Component } from 'react';
import { View,StyleSheet,ScrollView } from 'react-native';
import { Form, Item, Input, Label, Title, Header,Button, Text, Body,Footer,Left, Textarea} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

class DataDonationScreen extends Component {
    
    goSelectLocation = () =>{
        this.props.navigation.navigate('selectLocation')
    }
    goBackSelectCategory = () =>{
        this.props.navigation.navigate('SelectCategory')
    }
    render(){
        console.log(this.props)
        return(
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                        <Left>
                            <Button transparent onPress={this.goBackSelectCategory}>
                                <Icon name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.textHeader}>Detalles de la donación</Title>
                        </Body>
                        </Header>
                        <View style={styles.cardBackground}>
                            <Form style={{marginTop:20}}>
                            <ScrollView>
                                <Label style={{marginLeft:15}}>Estado</Label>
                                <Item success={false} style={{marginRight:15}}>
                                    <Icon active name='thumbs-up' size={25} color="#243949" />
                                    <Input style={{marginLeft:10}}/>
                                    <Icon name='check-circle' color="green" size={25} style={{marginRight:15}} />
                                </Item>

                                <Label style={{marginLeft:15, marginTop:20}}>Título</Label>
                                <Item success={false} style={{marginRight:15}}>
                                    <Icon active name='edit' size={25} color="#243949" />
                                    <Input style={{marginLeft:10}} />
                                    <Icon name='check-circle' color="green" size={25} style={{marginRight:15}} />
                                </Item>

                                <Label style={{marginLeft:15, marginTop:20}}>Cantidad</Label>
                                <Item success={false} style={{marginRight:15}}>
                                    <Icon active name='list-alt' size={25} color="#243949" />
                                    <Input style={{marginLeft:10}}/>
                                    <Icon name='check-circle' color="green" size={25} style={{marginRight:15}} />
                                </Item>

                                <Label style={{marginLeft:15, marginTop:20}}>Observaciones</Label>
                                <Textarea rowSpan={5} bordered style={{marginRight:15, marginLeft:15}} />
                            </ScrollView>
                            </Form>
                        </View>
                        <Footer style={styles.footerContainer}>
                            <Button transparent onPress={this.goSelectLocation} disabled={false}>
                                <Text style={{color:'#243949',fontWeight:'bold'}}>Continuar</Text>
                            </Button>
                        </Footer>    
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

export default DataDonationScreen;