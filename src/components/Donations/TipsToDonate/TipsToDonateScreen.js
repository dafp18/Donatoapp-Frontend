import React,{Component} from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { Header, Left, Button, Body, Title, Card, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


const tips = [
    {id:1, title:'Ropa', image:require('../../../assets/img/imgCat_Ropa.png'), description:'Puedes donar todo tipo de prendas ya sean nuevas o usadas, asegurate que esten en buen estado, estos son algunos ejemplos: ropa de bebés, trajes, vestidos.'},
    {id:2, title:'Muebles', image:require('../../../assets/img/imgCat_Muebles.png'), description:'Puedes donar todo tipo de muebles nuevos o usados, asegurate que esten en buen estado, estos son algunos ejemplos: muebles de oficina (sillas, escritorios, gabinetes).'},
    {id:3, title:'Juguetes', image:require('../../../assets/img/imgCat_Juguetes.png'), description:'Sabemos que con el paso del tiempo es dificíl encontrarles lugar a los juguetes de los niños, asegurate que esten en buen estado y donalos, te aseguramos que llegarán a las manos indicadas.'},
    {id:4, title:'Ortopedicos', image:require('../../../assets/img/imgCat_Ortopedicos.png'), description:'Si cuentas con una silla de ruedas que ya no usas y esta en buen estado, puedes tomar las fotos y publicarla para que alguien que la necesita pueda usarla.'},
    {id:5, title:'Libros', image:require('../../../assets/img/imgCat_Libros.png'), description:'Puedes donar todo tipo de libros ya sean nuevos o usados, asegurate que esten en buen estado.'},
    {id:6, title:'Alimentos', image:require('../../../assets/img/imgCat_Comida.png'), description:'Es importante que si vas a donar alimentos tengas en cuenta que solamente son válidos los no perecederos'},
    {id:7, title:'Electrodomésticos', image:require('../../../assets/img/imgCat_Electrodomesticos.png'), description:'Si cuentas con electrodomésticos que ya no usas, es muy probable que en una de las fundaciones registradas les den uso.'}

]


class TipsToDonateScreen extends Component {
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
                                <Title style={styles.textHeader}>Tips para donar</Title>
                            </Body>
                        </Header>
                        <View style={styles.cardBackground}>
                            <FlatList
                                style={{marginLeft:15, marginRight:15}}
                                data={tips}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({item}) =>{
                                    return <Card style={styles.cards}>
                                                <Title style={{color:'#243949', marginTop:10}}>{item.title}</Title>                                         
                                                <Image source={item.image} style={styles.image} resizeMode='contain'  />
                                                
                                                <Text style={{marginRight:10, marginLeft:15, marginBottom:10}}>{item.description}</Text>                                             
                                            </Card>
                                }} 
                                
                               
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
    image: {
        height: 120,
        width: 120 
    },
    cards:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:8,
        marginRight:8,
        borderRadius:5,
        borderTopColor:'#243949',
        borderTopWidth:3,
        
    }
});

export default TipsToDonateScreen;