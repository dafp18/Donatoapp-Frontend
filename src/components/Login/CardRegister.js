import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Content, Item, Icon, Label, Input, Button,Text } from 'native-base';
import Http from '../../helpers/http';

class CardRegister extends Component {
    state={
        IsValidate:false,
        iconDocumentSuccess: 'none',
        iconDocumentError: 'none',
        iconNombreSuccess: 'none',
        iconNombreError: 'none',
        iconApellidoSuccess: 'none',
        iconApellidoError: 'none',
        borderColor:'#d9d5dc',
        cedula:'',
        nit:'',
        apellidos:'',
        email:'',
        direccion:'',
        telefono:'',
        email:'',
        password:''
    }

    componentDidMount = () => {
        console.log(this.props)
        //this.setState({rolSelected:.rolSelected})
    }

    validateForm =(text,label) => {
        if((label === 'cedula' || label === 'nit') && (text.length === 0 )){
            this.setState({iconDocumentSuccess:'none',iconDocumentError:'none', borderColor:'#d9d5dc'})            
        }
        if((label === 'cedula' || label === 'nit') && text.length > 0 && text.length < 6 ){
            this.setState({iconDocumentSuccess:'none',iconDocumentError:'flex', borderColor:'red'})            
        }
        if((label === 'cedula' || label === 'nit') && (text.length > 6) ){
            if(/^([0-9])*$/.test(Number(text))){
                this.setState({iconDocumentSuccess:'flex',iconDocumentError:'none', borderColor:'green'})
                if(label === 'cedula'){ this.setState({cedula:text}) }
                if(label === 'nit'){ this.setState({nit:text}) }                
            }else{
                this.setState({iconDocumentSuccess:'none',iconDocumentError:'flex', borderColor:'red'})
            }             
        }

        if(label==='nombre' || label==='apellido'){
            if(label==='nombre'){ this.setState({nombre:text}) }
            if(label==='apellido'){ this.setState({apellido:text}) }
            /*if(text.length === 0 && text.length < 6 ){
                this.setState({iconCedulaSuccess:'none',iconCedulaError:'flex', borderColor:'red'})            
            }
            if(/^[a-zA-Z ]+$/.test(text)){
                if(label==='nombre'){

                }else{

                }
            }*/
        }

        if(label==='telefono'){
            this.setState({telefono:text})
        }

        if(label==='direccion'){
            this.setState({direccion:text})
        }

        if(label==='email'){
            this.setState({email:text})
        }

        if(label==='telefono'){
            this.setState({telefono:text})
        }
        if(label==='password'){
            this.setState({password:text})
        }       

        /*if(label === 'cedula' && text.length === 0 ){
            console.log('salee')
            this.setState({iconError:'',iconSucces:'none'})            
        }*/  
        
    }
    registerNewUSer = async () => {
        let obj = {
            name: this.state.nombre,
            lastname: this.state.apellido,
            user: this.state.email,
            address: this.state.direccion,
            phone: this.state.telefono,
            num_document: this.props.rolSelected === 'Fundacion' ? this.state.nit : this.state.cedula,
            email: this.state.email,
            password: this.state.password,
            id_rol: this.props.rolSelected === 'Fundacion' ? 2 : 3,
            id_document: this.props.rolSelected === 'Fundacion' ? 2 : 1,
            is_active:false
        }

        const resource = '/registerNewUser'
        const registerUser = await Http.instance.post(resource,JSON.stringify(obj))
        console.log(registerUser,'registerrrr')
        
        //alert('Usuario registrado correctamente')
        //this.props.navigation.navigate('Login')
        
    }
    render(){
        const {navigation,rolSelected} = this.props
        const {IsValidate,iconDocumentSuccess,iconDocumentError,iconNombreSuccess,iconNombreError,iconApellidoSuccess,iconApellidoError} = this.state
        return(

            <Content padder style={{marginTop:10}}>
                        <View style={styles.containerImg} >
                            { rolSelected === 'Fundacion' ? <Image
                                                                style={{ height:100, width:100, marginBottom:10 }}
                                                                source={require('../../assets/img/fundacionRegister.png')}
                                                            />
                                                          :  <Image
                                                                style={{ height:100, width:100, marginBottom:10 }}
                                                                source={require('../../assets/img/donanteRegister.png')}
                                                            />

                            }
                        </View>
                        { rolSelected === 'Fundacion' ? <Item floatingLabel last style={styles.labels}>
                                                            <Icon active name='card' style={styles.icon} />
                                                            <Label >Nit</Label>
                                                            <Input style={{borderColor:"blue"}} onChangeText={ nit => this.validateForm(nit, 'nit')}/>
                                                            <Icon name='checkmark-circle' style={{color:'green', display:iconDocumentSuccess}} />
                                                            <Icon name='close-circle' style={{color:'red', display:iconDocumentError}}/>
                                                        </Item>
                                                      : <Item floatingLabel last style={{ borderColor:this.state.borderColor, marginTop:10,marginLeft:20,}}>
                                                            <Icon active name='card' style={styles.icon} />
                                                            <Label >Cédula</Label>
                                                            <Input onChangeText={ cedula => this.validateForm(cedula, 'cedula')}/>
                                                            <Icon name='checkmark-circle' style={{color:'green', display:iconDocumentSuccess}} />
                                                            <Icon name='close-circle' style={{color:'red', display:iconDocumentError}}/>
                                                        </Item>
                        }                        
                        <Item floatingLabel last style={styles.labels}  >
                            <Icon active name='person' style={styles.icon} />
                            <Label>Nombres</Label>
                            <Input onChangeText={ nombre => this.validateForm(nombre, 'nombre')}/>
                            <Icon name='checkmark-circle' style={{color:'green', display:iconNombreSuccess}} />
                            <Icon name='close-circle' style={{color:'red', display:iconNombreError}}/>
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='people' style={styles.icon}/>
                            <Label>Apellidos</Label>
                            <Input onChangeText={ apellido => this.validateForm(apellido, 'apellido')}/>
                            <Icon name='checkmark-circle' style={{color:'green', display:iconApellidoSuccess}} />
                            <Icon name='close-circle' style={{color:'red', display:iconApellidoError}}/>
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='call' style={styles.icon}/>
                            <Label>Teléfono</Label>
                            <Input onChangeText={ telefono => this.validateForm(telefono,'telefono')}/>
                            <Icon name='checkmark-circle' style={{color:'green', display:'none'}} />
                            <Icon name='close-circle' style={{color:'red', display:'none'}}/>
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='location' style={styles.icon}/>
                            <Label>Dirección</Label>
                            <Input onChangeText={ direccion => this.validateForm(direccion,'direccion')}/>
                            <Icon name='checkmark-circle' style={{color:'green', display:'none'}} />
                            <Icon name='close-circle' style={{color:'red', display:'none'}}/>
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='at' style={styles.icon}/>
                            <Label>Correo electrónico</Label>
                            <Input onChangeText={ email => this.validateForm(email,'email')}/>
                            <Icon name='checkmark-circle' style={{color:'green', display:'none'}} />
                            <Icon name='close-circle' style={{color:'red', display:'none'}}/>
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='key' style={styles.icon}/>
                            <Label>Contraseña</Label>
                            <Input secureTextEntry={true} onChangeText={ password => this.validateForm(password,'password')}/>
                            <Icon name='checkmark-circle' style={{color:'green', display:'none'}} />
                            <Icon name='close-circle' style={{color:'red', display:'none'}}/>
                        </Item>
                        <Item floatingLabel last style={styles.labels}>
                            <Icon active name='key' style={styles.icon}/>
                            <Label>Confirmar contraseña</Label>
                            <Input secureTextEntry={true} onChangeText={ confirmpassword => this.validateForm(confirmpassword,'confirmpassword')}/>
                            <Icon name='checkmark-circle' style={{color:'green', display:'none'}} />
                            <Icon name='close-circle' style={{color:'red', display:'none'}}/>
                        </Item>
                        
                        <Button block style={styles.btn} disabled={IsValidate} onPress={this.registerNewUSer} >
                            <Text>Registrarse</Text>
                        </Button>
                        
                        
                        
        </Content>
        )
    }
}

const styles = StyleSheet.create({
    icon:{
        color: "#08e5d2",
        textAlign: "center"
    },
    btn:{
        backgroundColor: '#667580',//'#243949',
        marginLeft:15,
        marginRight:15,
        marginTop:20
    },
    labels:{
        marginTop:10,
        marginLeft:20,
        
    },
    icon:{
        color:'#243949'
    },
    containerImg:{
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    }
       
});

export default CardRegister;