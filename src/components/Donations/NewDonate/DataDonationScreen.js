import React, { Component } from 'react';
import { View,StyleSheet,ScrollView} from 'react-native';
import { Form, Item, Input, Label, Title, Header,Button, Text, Body,Footer,Left, Textarea, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon_ from 'react-native-vector-icons/FontAwesome';

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
        btnContinuar:true   

    }
    
    goSelectLocation = () =>{
        this.props.navigation.navigate('selectLocation')
    }
    goBackSelectCategory = () =>{
        this.props.navigation.navigate('SelectCategory')
    }

    validaForm = (text,label) => {
        console.log(text.length+' | '+label)
        
        if((label === 'titulo') && (text.length === 0 )){
            this.setState({iconTitleSuccess:'none',iconTitleError:'none', borderColorTitle:'#d9d5dc'})            
        }
        if((label === 'titulo') && text.length > 0 && text.length <= 3 ){
            this.setState({iconTitleSuccess:'none',iconTitleError:'flex', borderColorTitle:'red', bgColorFooter:false})            
        }
        if(label === 'titulo' && text.length > 3 ){
            this.setState({iconTitleSuccess:'flex',iconTitleError:'none', borderColorTitle:'green', titulo:text })
        }

        if((label === 'cantidad') && (text.length === 0 )){
            this.setState({iconQuantitySuccess:'none',iconQuantityError:'none', borderColorQuantity:'#d9d5dc', cantidad:0, bgColorFooter:false})            
        }
        if((label === 'cantidad') && text.length > 0 ){
            if(/^([1-9])*$/.test(Number(text))){
                this.setState({iconQuantitySuccess:'flex',iconQuantityError:'none', borderColorQuantity:'green', cantidad:Number(text)})    
            }else{
                this.setState({iconQuantitySuccess:'none',iconQuantityError:'flex', borderColorQuantity:'red', cantidad:0,bgColorFooter:false})            
            }   
        }
        setTimeout(() => {
            console.log(this.state.cantidad, 'cantidaad')
            if(this.state.titulo && this.state.cantidad){ this.setState({bgColorFooter:true,btnContinuar:false })} 
        }, 2);
                
    }
    render(){
        const { iconStatusSuccess,iconStatusError,iconTitleSuccess,iconTitleError,iconQuantitySuccess,iconQuantityError,borderColorStatus
               ,borderColorTitle,borderColorQuantity, bgColorFooter, btnContinuar} = this.state
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
                        <View style={styles.cardBackground}>
                            <Form style={{marginTop:20}}>
                            <ScrollView>
                                
                                <Label style={{marginLeft:15}}>Estado</Label>
                                <Item style={{marginRight:15, borderColor:borderColorStatus}}>
                                    <Icon_ active name='thumbs-up' size={25} color="#243949" />
                                    <Input style={{marginLeft:10}} onChangeText={ status => { this.validaForm(status, 'estado' )} } disabled />
                                    <Icon name='checkmark-circle' style={{color:'green', display:iconStatusSuccess}} />
                                    <Icon name='close-circle' style={{color:'red', display:iconStatusError}}/>
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
                                    <Input style={{marginLeft:10}} onChangeText={ quantity => {this.validaForm(quantity, 'cantidad' )} }/>
                                    <Icon name='checkmark-circle' style={{color:'green', display:iconQuantitySuccess}} />
                                    <Icon name='close-circle' style={{color:'red', display:iconQuantityError}}/>
                                </Item>

                                <Label style={{marginLeft:15, marginTop:20}}>Observaciones</Label>
                                <Textarea rowSpan={5} bordered style={{marginRight:15, marginLeft:15}} />
                            </ScrollView>
                            </Form>
                        </View>
                        <Footer style={{backgroundColor: bgColorFooter ? "#f7f8fa" : "#ccc" , borderTopColor:"#517fa4",borderTopWidth:3}}>
                            <Button transparent onPress={this.goSelectLocation} disabled={btnContinuar}>
                                <Text style={{color:'#243949',fontWeight:'bold',fontSize: 15}}>Continuar</Text>
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
});

export default DataDonationScreen;