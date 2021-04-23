import React, { Component  } from 'react';
import {View,StyleSheet,Image} from 'react-native';
import {Header,Card,Text,Button,Title,Body,Left} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';


class ProfileScreen extends Component {
    
    goBackHome = () => {
        this.props.navigation.navigate('Home')
    }

    render(){
        
        return(
                <LinearGradient colors={['#243949', '#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                            <Left>
                                <Button transparent onPress={this.goBackHome}>
                                    <Icon_ name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                                </Button>
                            </Left>
                            <Body>
                                <Title style={styles.textHeader}>Mi cuenta</Title>
                            </Body>
                        </Header>
                                              
                        <Card style={styles.cardFirst}>
                            <Title style={{color:'black', marginTop:90, textAlign:'center'}} >Diego Alejandro Forero Pinzón</Title>   
                            
                            <View style={{flexDirection:'row', paddingVertical:15, paddingHorizontal:30, marginTop:30}}>
                                <Icon_ name='envelope' color="grey" size={20} style={{marginTop:2}} />
                                <Text style={{ marginLeft:15,fontSize:18}}>dafp18@hotmail.com</Text>
                            </View>

                            <View style={{flexDirection:'row', paddingVertical:15, paddingHorizontal:30}}>
                                <Icon_ name='phone' color="grey" size={20} style={{marginTop:2}} />
                                <Text style={styles.rowText}>777777777777</Text>
                                <Icon_ name='edit' color="grey" size={25} style={{marginTop:2}} />
                            </View>

                            <View style={{flexDirection:'row', paddingVertical:15, paddingHorizontal:30}}>
                                <Icon_ name='map-marker' color="grey" size={20} style={{marginTop:2}} />
                                <Text style={styles.rowText}>Calle fasla 1234 direccion</Text>
                                <Icon_ name='edit' color="grey" size={25} style={{marginTop:2}} />
                            </View>

                            <View style={{flexDirection:'row', paddingVertical:15, paddingHorizontal:30}}>
                                <Icon_ name='user' color="grey" size={20} style={{marginTop:2}} />
                                <Text style={{ marginLeft:15,fontSize:18}}>Donante</Text>
                            </View>
                            
                            <Button block style={styles.btnSave} onPress={()=>{this.props.navigation.navigate('SelectRol')}}>
                                <Text>Guardar cambios</Text>                            
                            </Button>
                            <Button block style={styles.btn} onPress={()=>{this.props.navigation.navigate('SelectRol')}}>
                                <Text>Cambiar contraseña</Text>                            
                            </Button>
                        </Card>
                        <Card style={styles.cardImg}>
                            <Image source={require('../../assets/img/donanteRegister.png')} style={styles.img}/>
                            <Icon_ name='edit' color="grey" size={35} style={styles.iconImg}/>
                        </Card>
                        <View style={styles.cardBackground}>
                            
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
        marginLeft:40
    },
    iconHeader:{
        marginTop:20
    },
    cardBackground: {
        flex: 1,
        backgroundColor: "#dadbdd",
        marginTop:200,
        borderTopColor:'#517fa4',
        borderTopWidth:100
    },
    cardFirst:{
        marginTop:150,
        marginLeft:15,
        marginRight:15,
        height:580,
        borderRadius:10,
        borderColor:'#fff',
        ...StyleSheet.absoluteFill
    },
    cardImg:{
        marginTop:90,
        marginLeft:140,
        marginRight:50,
        height: 130,
        width: 130,
        borderRadius:65,
        borderColor:'#243949',
        ...StyleSheet.absoluteFill
    },
    img:{
        height: 130,
        width: 130,
        borderRadius:65
    },
    iconImg:{
        marginTop:90,
        marginLeft:90,
        ...StyleSheet.absoluteFill
    },
    rowText: {
        marginLeft:15,
        fontSize:18,
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        width:260
    },
    btn:{
        backgroundColor: '#243949',
        marginLeft:30,
        marginRight:30,
        marginTop:10
    },
    btnSave:{
        backgroundColor: '#00bfa6',
        marginLeft:30,
        marginRight:30,
        marginTop:40
    }
});

export default ProfileScreen;