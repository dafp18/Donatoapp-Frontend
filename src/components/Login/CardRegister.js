import React, { Component } from 'react';
import { StyleSheet, Image, View, Alert, ActivityIndicator } from 'react-native';
import { Content, Item, Icon, Label, Input, Button,Text } from 'native-base';
import Http from '../../helpers/http';

class CardRegister extends Component {
    state={
        disableBtnRegister:true,
        iconDocumentSuccess: 'none',
        iconDocumentError: 'none',
        iconNombreSuccess: 'none',
        iconNombreError: 'none',
        iconApellidoSuccess: 'none',
        iconApellidoError: 'none',
        iconTelefonoSuccess:'none',
        iconTelefonoError:'none',
        iconDireccionSuccess:'none',
        iconDireccionError:'none',
        iconEmailSuccess:'none',
        iconEmailError:'none',
        iconPasswordSuccess:'none',
        iconPasswordError:'none',
        iconConfirmPasswordSuccess:'none',
        iconConfirmPasswordError:'none',
        borderColorNit:'#d9d5dc',
        borderColorNombre:'#d9d5dc',
        borderColorApellido:'#d9d5dc',
        borderColorTelefono:'#d9d5dc',
        borderColorDireccion:'#d9d5dc',
        borderColorEmail:'#d9d5dc',
        borderColorPassword:'#d9d5dc',
        borderColorConfirmPassword:'#d9d5dc',
        cedula:null,
        nit:null,
        nombre:null,
        apellidos:null,
        direccion:null,
        telefono:null,
        email:null,
        password:null,
        confirmPassword:null,
        pwdEqual:false,
        loading:false
    }

    validateForm =(text,label) => {
        if((label === 'cedula' || label === 'nit') && (text.length === 0 )){
            this.setState({ iconDocumentSuccess:'none',iconDocumentError:'none', borderColorNit:'#d9d5dc'})            
        }

        if((label === 'cedula' || label === 'nit') && text.length > 0 && text.length < 6 ){
            this.setState({iconDocumentSuccess:'none',iconDocumentError:'flex', borderColorNit:'red'})            
        }

        if((label === 'cedula' || label === 'nit') && (text.length > 6) ){
            if(/^([0-9])*$/.test(Number(text))){
                this.setState({iconDocumentSuccess:'flex',iconDocumentError:'none', borderColorNit:'green'})
                if(label === 'cedula'){ this.setState({cedula:text}) }
                if(label === 'nit'){ this.setState({nit:text})}                
            }else{
                this.setState({iconDocumentSuccess:'none',iconDocumentError:'flex', borderColorNit:'red'})
            }             
        }

        if(label==='nombre'){
            if(label==='nombre'){
                if(text.length === 0){
                    this.setState({iconNombreSuccess:'none', iconNombreError:'none',borderColorNombre:'#d9d5dc'}) 
                }else if(text.length > 2){
                    this.setState({nombre:text, iconNombreSuccess:'flex', iconNombreError:'none',borderColorNombre:'green'}) 
                }else{
                    this.setState({iconNombreSuccess:'none', iconNombreError:'flex', borderColorNombre:'red'}) 
                }   
            }
        }

        if(label==='apellido'){
            if(text.length === 0){
                this.setState({iconApellidoSuccess:'none', iconApellidoError:'none',borderColorApellido:'#d9d5dc'}) 
            }else if(text.length > 2){
                this.setState({apellidos:text, iconApellidoSuccess:'flex', iconApellidoError:'none',borderColorApellido:'green'}) 
            }else{
                this.setState({iconApellidoSuccess:'none', iconApellidoError:'flex', borderColorApellido:'red'}) 
            }     
        }

        if(label==='telefono'){
            if(/^([0-9])*$/.test(Number(text))){
                if(text.length === 0){
                    this.setState({iconTelefonoSuccess:'none', iconTelefonoError:'none', borderColorTelefono:'#d9d5dc'}) 
                }else if(text.length > 6){
                    this.setState({telefono:text, iconTelefonoSuccess:'flex', iconTelefonoError:'none', borderColorTelefono:'green'}) 
                }else{
                    this.setState({iconTelefonoSuccess:'none', iconTelefonoError:'flex', borderColorTelefono:'red'}) 
                }  
            } 
            
        }

        if(label==='direccion'){
            if(text.length === 0){
                this.setState({iconDireccionSuccess:'none', iconDireccionError:'none', borderColorDireccion:'#d9d5dc' })
            }else if(text.length > 8){
                this.setState({direccion:text, iconDireccionSuccess:'flex', iconDireccionError:'none', borderColorDireccion:'green'})
            }else{
                this.setState({iconDireccionSuccess:'none', iconDireccionError:'flex', borderColorDireccion:'red'})
            } 
        }

        if(label==='email'){
            if(text.length === 0){
                this.setState({iconEmailSuccess:'none', iconEmailError:'none', borderColorEmail:'#d9d5dc'}) 
            }else if (text.length > 5 && text.includes('@')){
                this.setState({email:text, iconEmailSuccess:'flex', iconEmailError:'none', borderColorEmail:'green'})
            }else{
                this.setState({iconEmailSuccess:'none', iconEmailError:'flex', borderColorEmail:'red'})
            }
        }

        if(label === 'password'){
            if(text.length > 7){
                this.setState({password:text,borderColorPassword:'green',iconPasswordSuccess:'flex', iconPasswordError:'none' })
            }
            
            if(text.length === 0){
                this.setState({iconPasswordSuccess:'none',iconPasswordError:'none', borderColorPassword:'#d9d5dc'})            
            }

            if( text.length > 0 && text.length <= 7 ){
                this.setState({iconPasswordSuccess:'none',iconPasswordError:'flex', borderColorPassword:'red'})            
            }
        }

        if(label === 'confirmPassword'){
            if(this.state.password === text){
                this.setState({confirmPassword:text,pwdEqual:true,borderColorConfirmPassword:'green',iconConfirmPasswordSuccess:'flex', iconConfirmPasswordError:'none' })
            }else{
                this.setState({confirmPassword:text,pwdEqual:false,borderColorConfirmPassword:'red',iconConfirmPasswordSuccess:'none', iconConfirmPasswordError:'flex' }) 
            }
        }
                    
        setTimeout(() => {
            if( this.props.rolSelected === 'Fundacion'){
                if(this.state.nit && this.state.nombre && this.state.telefono && this.state.direccion && this.state.email && this.state.pwdEqual){
                    this.setState({disableBtnRegister:false})
                }else{
                    this.setState({disableBtnRegister:true})
                }
            }else{
                if(this.state.cedula && this.state.nombre && this.state.apellidos && this.state.telefono && this.state.direccion && this.state.email && this.state.pwdEqual){
                    this.setState({disableBtnRegister:false})
                }else{
                    this.setState({disableBtnRegister:true})
                }
            }
        }, 1);
       

    }
    registerNewUSer = async () => {
        this.setState({loading:true, disableBtnRegister:true})
        let obj = {
            name: this.state.nombre,
            lastname: this.props.rolSelected === 'Fundacion' ? '.' : this.state.apellido,
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
        if(registerUser.Message === 'Registrado'){
            this.setState({loading:false})
            Alert.alert(
                "FELICITACIONES!",
                "Se ha registrado en DonatonApp, por favor verifique su email y confirme la cuenta.",
                [ {text: "OK", onPress: () => this.props.navigation.navigate('Home') } ],
                {cancelable: true}
            );
        }     
    }
    render(){
        const {rolSelected} = this.props
        const {iconDocumentSuccess,iconDocumentError,iconNombreSuccess,iconNombreError,iconApellidoSuccess,iconApellidoError, borderColorApellido, 
               iconTelefonoSuccess, iconTelefonoError, iconDireccionSuccess, iconDireccionError, iconEmailSuccess, iconEmailError,
               borderColorNit, borderColorNombre, borderColorTelefono, borderColorDireccion, borderColorEmail,
               iconPasswordSuccess, iconPasswordError, iconConfirmPasswordSuccess, iconConfirmPasswordError, borderColorPassword, borderColorConfirmPassword} = this.state
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
                        { rolSelected === 'Fundacion' ? <Item floatingLabel last style={[styles.labels, {borderColor:borderColorNit}]}>
                                                            <Icon active name='business-outline' type="Ionicons" style={styles.icon} />
                                                            <Label >Nit</Label>
                                                            <Input style={{borderColor:"blue"}} onChangeText={ nit => this.validateForm(nit, 'nit')}/>
                                                            <Icon name='checkmark-circle' style={{color:'green', display:iconDocumentSuccess}} />
                                                            <Icon name='close-circle' style={{color:'red', display:iconDocumentError}}/>
                                                        </Item>
                                                      : <Item floatingLabel last style={[styles.labels, {borderColor:borderColorNit}]}>
                                                            <Icon active name='person-circle-outline' type="Ionicons" style={styles.icon} />
                                                            <Label >Cédula</Label>
                                                            <Input onChangeText={ cedula => this.validateForm(cedula, 'cedula')}/>
                                                            <Icon name='checkmark-circle' style={{color:'green', display:iconDocumentSuccess}} />
                                                            <Icon name='close-circle' style={{color:'red', display:iconDocumentError}}/>
                                                        </Item>
                        }
                        <Item floatingLabel last style={[styles.labels, {borderColor:borderColorNombre}]} >
                            <Icon active name='person-outline' type="Ionicons" style={styles.icon} />
                            { rolSelected === 'Fundacion' ? <Label>Nombre fundación</Label> : <Label>Nombres</Label> }
                            <Input onChangeText={ nombre => this.validateForm(nombre, 'nombre')}/>
                            <Icon name='checkmark-circle' style={{color:'green', display:iconNombreSuccess}} />
                            <Icon name='close-circle' style={{color:'red', display:iconNombreError}}/>
                        </Item>
                                                                                
                        { rolSelected === 'Fundacion' ? null
                                                      : <Item floatingLabel last style={[styles.labels, {borderColor:borderColorApellido}]}>
                                                            <Icon active name='people-outline' type="Ionicons" style={styles.icon}/>
                                                            <Label>Apellidos</Label>
                                                            <Input onChangeText={ apellido => this.validateForm(apellido, 'apellido')}/>
                                                            <Icon name='checkmark-circle' style={{color:'green', display:iconApellidoSuccess}} />
                                                            <Icon name='close-circle' style={{color:'red', display:iconApellidoError}}/>
                                                        </Item>
                        }
                        
                        <Item floatingLabel last style={[styles.labels, {borderColor:borderColorTelefono}]}>
                            <Icon active name='call-outline' type="Ionicons" style={styles.icon}/>
                            <Label>Teléfono</Label>
                            <Input onChangeText={ telefono => this.validateForm(telefono,'telefono')} keyboardType="numeric"/>
                            <Icon name='checkmark-circle' style={{color:'green', display:iconTelefonoSuccess}} />
                            <Icon name='close-circle' style={{color:'red', display:iconTelefonoError}}/>
                        </Item>
                        <Item floatingLabel last style={[styles.labels, {borderColor:borderColorDireccion}]}>
                            <Icon active name='location-outline' type="Ionicons" style={styles.icon}/>
                            <Label>Dirección</Label>
                            <Input onChangeText={ direccion => this.validateForm(direccion,'direccion')}/>
                            <Icon name='checkmark-circle' style={{color:'green', display:iconDireccionSuccess}} />
                            <Icon name='close-circle' style={{color:'red', display:iconDireccionError}}/>
                        </Item>
                        <Item floatingLabel last style={[styles.labels, {borderColor:borderColorEmail}]}>
                            <Icon active name='mail-outline' type="Ionicons" style={styles.icon}/>
                            <Label>Correo electrónico</Label>
                            <Input onChangeText={ email => this.validateForm(email,'email')}/>
                            <Icon name='checkmark-circle' style={{color:'green', display:iconEmailSuccess}} />
                            <Icon name='close-circle' style={{color:'red', display:iconEmailError}}/>
                        </Item>
                        <Item floatingLabel last style={[styles.labels, {borderColor:borderColorPassword}]}>
                            <Icon active name='lock-closed-outline' type="Ionicons" style={styles.icon}/>
                            <Label>Contraseña</Label>
                            <Input secureTextEntry={true} onChangeText={ password => this.validateForm(password,'password')}/>
                            <Icon name='checkmark-circle' style={{color:'green', display:iconPasswordSuccess}} />
                            <Icon name='close-circle' style={{color:'red', display:iconPasswordError}}/>
                        </Item>
                        <Item floatingLabel last style={[styles.labels, {borderColor:borderColorConfirmPassword}]}>
                            <Icon active name='lock-open-outline' type="Ionicons" style={styles.icon}/>
                            <Label>Confirmar contraseña</Label>
                            <Input secureTextEntry={true} onChangeText={ confirmpassword => this.validateForm(confirmpassword,'confirmPassword')}/>
                            <Icon name='checkmark-circle' style={{color:'green', display:iconConfirmPasswordSuccess}} />
                            <Icon name='close-circle' style={{color:'red', display:iconConfirmPasswordError}}/>
                        </Item>
                        
                        <Button block style={[styles.btn, {backgroundColor: this.state.disableBtnRegister ? '#667580':'#243949'}]} disabled={this.state.disableBtnRegister} onPress={this.registerNewUSer} >
                            <Text>Registrarse</Text>
                            { this.state.loading && <ActivityIndicator size="large" color="#08e5d2" /> }
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
        marginLeft:15,
        marginRight:15,
        marginTop:20
    },
    labels:{
        marginTop:10,
        marginLeft:20
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