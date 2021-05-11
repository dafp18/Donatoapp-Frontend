import React, { Component } from 'react';
import { View,StyleSheet,ScrollView,Pressable,Modal} from 'react-native';
import { Form, Item, Input, Label, Title, Header,Button, Text, Body,Footer,Left, Textarea, Icon, Card, Right } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

class DataDonationScreen extends Component {
    state={
        iconStatusSuccess: 'none',
        iconStatusError: 'none',
        iconTitleSuccess: 'none',
        iconTitleError: 'none',
        iconQuantitySuccess: 'none',
        iconQuantityError: 'none',
        borderColorStatus:'#d9d5dc',
        borderColorTitle:'#d9d5dc',
        borderColorQuantity:'#d9d5dc',
        titulo:null,
        cantidad:0,
        bgColorFooter: false,
        btnContinuar:true,
        modalVisible: false,
        estado:null,
        descripcion:null,
        observaciones:null
    }
        
    setModalVisible = (visible, estado) => {
        this.setState({ modalVisible: visible, estado});
        if(estado == 'Nuevo' || estado == 'Usado'){
            this.setState({ modalVisible: visible, estado, borderColorStatus: 'green' });
        }       
    }

    goSelectLocation = async () =>{
        let dataDonation = {
            estado:this.state.estado,
            titulo:this.state.titulo.toString(),
            cantidad: this.state.cantidad.toString(),
            descripcion: this.state.descripcion.toString() || '',
            observaciones: this.state.observaciones.toString() || ''
        }
        try {
            await AsyncStorage.setItem('dataDonation', JSON.stringify(dataDonation))
        } catch (e) {
            console.log(`error setItem dataDonation: ${e}`)
        }       
        this.props.navigation.navigate('selectLocation')
    }
    goBackSelectCategory = () =>{
        this.props.navigation.goBack()
    }

    validaForm = (text,label) => {
              
        if((label === 'titulo') && (text.length === 0 )){
            this.setState({iconTitleSuccess:'none',iconTitleError:'none', borderColorTitle:'#d9d5dc',bgColorFooter:false ,btnContinuar:true})            
        }
        if((label === 'titulo') && text.length > 0 && text.length <= 3 ){
            this.setState({iconTitleSuccess:'none',iconTitleError:'flex', borderColorTitle:'red', bgColorFooter:false, btnContinuar:true})            
        }
        if(label === 'titulo' && text.length > 3 ){
            this.setState({iconTitleSuccess:'flex',iconTitleError:'none', borderColorTitle:'green', titulo:text, btnContinuar:true })
        }

        if((label === 'cantidad') && (text.length === 0 )){
            this.setState({iconQuantitySuccess:'none',iconQuantityError:'none', borderColorQuantity:'#d9d5dc', cantidad:0, bgColorFooter:false, btnContinuar:true})            
        }
        if((label === 'cantidad') && text.length > 0 ){
            if(/^([1-9])*$/.test(Number(text))){
                this.setState({iconQuantitySuccess:'flex',iconQuantityError:'none', borderColorQuantity:'green', cantidad:Number(text), btnContinuar:true})    
            }else{
                this.setState({iconQuantitySuccess:'none',iconQuantityError:'flex', borderColorQuantity:'red', cantidad:0,bgColorFooter:false, btnContinuar:true})            
            }   
        }

        if(label === 'descripcion'){
            this.setState({descripcion:text})
        }

        if(label === 'observaciones'){
            this.setState({observaciones:text})
        }

        setTimeout(() => {
            if((this.state.estado && this.state.cantidad && this.state.descripcion) && (this.state.titulo && this.state.titulo.length > 4) ){ this.setState({bgColorFooter:true,btnContinuar:false })} 
        }, 1);
                
    }
    render(){
        const { iconTitleSuccess,iconTitleError,iconQuantitySuccess,iconQuantityError,borderColorStatus
               ,borderColorTitle,borderColorQuantity, bgColorFooter, btnContinuar,modalVisible, estado} = this.state
        return(
                <LinearGradient colors={['#243949','#243949']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Header transparent style={{backgroundColor:'#243949'}}>
                        <Left>
                            <Button transparent onPress={this.goBackSelectCategory}>
                                <Icon_ name='chevron-left' color="#fff" size={20} style={styles.iconHeader}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.textHeader}>Detalles de la donación</Title>
                        </Body>
                        </Header>
                        <Card style={styles.cardFirst}>
                            <Icon active name='happy-outline' color="#243949" style={{fontSize:25,}} />
                            <Title style={{color:'#243949', fontSize:18, marginLeft:10}}>{this.props.route.params.category}</Title>
                        </Card>
                        <View style={styles.cardBackground}>
                            <Form style={{marginTop:50}}>
                                <ScrollView>
                                    
                                    <Label style={{marginLeft:15}}>Estado</Label>
                                    <Item success={false} style={{marginRight:15, borderColor:borderColorStatus}} onPress={() => this.setModalVisible(!modalVisible,estado)}>
                                        <Icon_ active name='thumbs-up' size={25} color="#243949" style={{marginBottom:10, marginTop:10}} />
                                        <Text style={{marginLeft:10}}>{estado}</Text>
                                        <Right>
                                            <Icon_ active name='chevron-down' size={15} color="#243949" style={{marginBottom:10, marginTop:10}}/>
                                        </Right>
                                        
                                    </Item>
                                    
                                                                        
                                    <Label style={{marginLeft:15, marginTop:20}}>Título</Label>
                                    <Item success={false} style={{marginRight:15, borderColor:borderColorTitle}}>
                                        <Icon_ active name='edit' size={25} color="#243949" />
                                        <Input style={{marginLeft:10}} onChangeText={ title => {this.validaForm(title, 'titulo' )} }/>
                                        <Icon name='checkmark-circle' style={{color:'green', display:iconTitleSuccess}} />
                                        <Icon name='close-circle' style={{color:'red', display:iconTitleError}}/>
                                    </Item>

                                    <Label style={{marginLeft:15, marginTop:20}}>Cantidad</Label>
                                    <Item success={false} style={{marginRight:15, borderColor:borderColorQuantity}}>
                                        <Icon_ active name='list-alt' size={25} color="#243949" />
                                        <Input style={{marginLeft:10}} keyboardType="numeric" onChangeText={ quantity => {this.validaForm(quantity, 'cantidad' )} }/>
                                        <Icon name='checkmark-circle' style={{color:'green', display:iconQuantitySuccess}} />
                                        <Icon name='close-circle' style={{color:'red', display:iconQuantityError}}/>
                                    </Item>

                                    <Label style={{marginLeft:15, marginTop:20}}>Descripción</Label>
                                    <Textarea rowSpan={3} bordered style={{marginRight:15, marginLeft:15}} onChangeText={ descripcion => {this.validaForm(descripcion, 'descripcion' )}} />

                                    <Label style={{marginLeft:15, marginTop:20}}>Observaciones</Label>
                                    <Textarea rowSpan={3} bordered style={{marginRight:15, marginLeft:15, marginBottom:15}} onChangeText={ observaciones => {this.validaForm(observaciones, 'observaciones' )}}/>
                                </ScrollView>
                            </Form>

                            
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    this.setModalVisible(!modalVisible);
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Seleccionar estado</Text>
                                        <Pressable
                                            style={[styles.option]}
                                            onPress={() => this.setModalVisible(!modalVisible, 'Nuevo')}
                                        >
                                            <Text style={styles.textStyle}>Nuevo</Text>
                                        </Pressable>

                                        <Pressable
                                            style={[styles.option]}
                                            onPress={() => this.setModalVisible(!modalVisible,'Usado')}
                                        >
                                            <Text style={styles.textStyle}>Usado</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                            

                        </View>

                        <Footer style={{backgroundColor: bgColorFooter ? "#00bfa6" : "#86cbbd" , borderTopColor:"#243949",borderTopWidth:3}}>
                            <Button transparent onPress={this.goSelectLocation} disabled={btnContinuar}>
                                <Text style={{color:'#fff',fontWeight:'bold',fontSize: 15}}>Continuar</Text>
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
    cardFirst:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:95,
        marginLeft:70,
        marginRight:70,
        height:50,
        borderRadius:10,
        borderColor:'#fff',
        borderBottomWidth:3,
        borderBottomColor:'#86cbbd',
        ...StyleSheet.absoluteFill,
    },
    cardBackground: {
        flex: 1,
        backgroundColor: "#f7f8fa",
        marginTop:40,
        borderTopColor:'#517fa4',
        borderTopWidth:3
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 40,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
                        width: 0,
                        height: 2
                    },
                        shadowOpacity: 2,
                        shadowRadius: 4,
                        elevation: 30
    },
    option: {
        marginTop:15,
        padding: 8,
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth       
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight:'bold'
    }
});

export default DataDonationScreen;