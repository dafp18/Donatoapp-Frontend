import React, { Component,createRef  } from 'react';
import {View,StyleSheet,Image} from 'react-native';
import {Header,Card,Text,Right,Button,Title,Body,ListItem,Left,List} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ActionSheet from "react-native-actions-sheet";
import Icon from 'react-native-vector-icons/FontAwesome';

import CardDonante from './CardDonante';

const actionSheetRef = createRef();
const listItems = [
    { id: 'opt_000001',title: 'Mi cuenta', subTitle: 'Información de tu cuenta', icon:'user-circle', iconColor:'#243949', sizeIcon:25},
    { id: 'opt_000002',title: 'Cerrar sesión', subTitle: 'Salida segura de la aplicación', icon:'times-circle', iconColor:'red', sizeIcon:28},
    { id: 'opt_000003',title: 'Acerca de', subTitle: 'Versión 1.0.0', icon:'info-circle', iconColor:'#517fa4', sizeIcon:28}
]
class HomeDonanteScreen extends Component {
    render(){
        return(
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                            <Body>
                                <Title style={styles.textHeader}>Inicio</Title>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => { actionSheetRef.current?.show()}}>
                                    <Icon name='bars' color="#fff" size={25} style={styles.iconHeader} />
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
                    <View>
                        <ActionSheet ref={actionSheetRef} 
                                        gestureEnabled={true}  
                                        containerStyle={styles.containerActionSheet} 
                                        indicatorColor="#243949"
                                    >
                            <View>
                                <List>
                                    {listItems?.map(itm =>{
                                        return (
                                            <ListItem thumbnail key={itm.id}>
                                                <Left>
                                                    <Button transparent>
                                                        <Icon active name={itm.icon} size={itm.sizeIcon} color={itm.iconColor} />
                                                    </Button>
                                                </Left>
                                                <Body>
                                                    <Text>{itm.title}</Text>
                                                    <Text note numberOfLines={1}>{itm.subTitle}</Text>
                                                </Body>
                                            </ListItem> 
                                        )
                                    })}     
                                </List>
                            </View>
                        </ActionSheet>
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
        marginTop:20
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
    },
    containerActionSheet:{
        flex: 1,
        backgroundColor:"#fff",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderTopColor:'#243949',
        borderTopWidth:3,
        padding:8       
    }
});

export default HomeDonanteScreen;