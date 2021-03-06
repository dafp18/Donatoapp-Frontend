import React, { Component,createRef  } from 'react';
import {View,StyleSheet,Image, Pressable, BackHandler} from 'react-native';
import {Header,Card,Text,Right,Button,Title,Body,ListItem,Left,List, Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ActionSheet from "react-native-actions-sheet";
import Icon_ from 'react-native-vector-icons/FontAwesome';
import Http from '../../helpers/http';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CardHome from './CardHome';

const actionSheetRef = createRef();
const listItems = [
    { id: 'opt_000001',title: 'Mi cuenta', subTitle: 'Información de tu cuenta', icon:'user-circle', iconColor:'#243949', sizeIcon:25, nextScreen:'Profile'},
    { id: 'opt_000002',title: 'Cerrar sesión', subTitle: 'Salida segura de la aplicación', icon:'times-circle', iconColor:'red', sizeIcon:28, nextScreen:'Login'},
    { id: 'opt_000003',title: 'Acerca de', subTitle: 'Versión 1.0.0', icon:'info-circle', iconColor:'#517fa4', sizeIcon:28, nextScreen:'Home'}
]
class HomeScreen extends Component {
    goScreen = (screen) => {
        actionSheetRef.current?.hide();
        if(screen === 'Login'){
            this.logout()
            this.props.navigation.navigate(screen)
        }else{
            this.props.navigation.navigate(screen)
        } 
    }

    logout = async () => {
        let idUSer = ''
        const keys = ['idUser', 'user', 'token']
        const resource = '/logout'
        try {
            idUSer = await AsyncStorage.getItem('idUser')
            await Http.instance.get(`${resource}/${idUSer}`)   
            await AsyncStorage.multiRemove(keys)
        } catch(e) {
            console.log(`error removeMultiItem: ${e}`)
        }
    }

    backAction = () => {
        BackHandler.exitApp()
        return true;
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", this.backAction );
    }
    
    componentWillUnmount() {
        this.backHandler.remove();
    }
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
                                    <Icon name='menu-outline' type="Ionicons" color="#fff" style={styles.iconHeader} />
                                </Button>
                            </Right>
                        </Header>
                        <Card style={styles.cardFirst}>
                            <Image source={this.props.route.params.imgPrincipaly} style={{height: 100, width: 300, marginTop:5, marginLeft:15}}/>
                            <Title style={styles.titleCardFirst}>{this.props.route.params.name}</Title>
                            <Text note style={styles.textNoteCardFirst}>Último ingreso: {this.props.route.params.ultimoIngreso?.substring(0,10)}</Text>
                        </Card>
                        <View style={styles.cardBackground}>
                            <CardHome {...this.props} />  
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
                                                            <Icon_ active name={itm.icon} size={itm.sizeIcon} color={itm.iconColor} />
                                                        </Button>
                                                    </Left>
                                                    
                                                    <Body>
                                                        <Pressable onPress={ () => this.goScreen(itm.nextScreen)} >
                                                            <Text>{itm.title}</Text>
                                                            <Text note numberOfLines={1}>{itm.subTitle}</Text>
                                                        </Pressable>
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
        marginTop:20,
        fontSize:35
    },
    cardBackground: {
        flex: 1,
        backgroundColor: "#f7f8fa",
        marginTop:70,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    },
    cardFirst:{
        marginTop:90,
        marginLeft:40,
        marginRight:40,
        height:160,
        borderRadius:10,
        borderColor:'#fff',
        borderTopColor:'#243949',
        borderTopWidth:3,
        ...StyleSheet.absoluteFill,
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

export default HomeScreen;