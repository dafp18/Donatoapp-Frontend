import React from 'react';
import { Container, Header, Content, Tab, Tabs, Text,} from 'native-base';
import { StyleSheet,View } from 'react-native';
import CardLogin from './CardLogin';
//import RolRegister from './RolRegister';
import CardRegister from './CardRegister';


class LoginScreen extends React.Component{
  
  
  render(){
    
    return(
            <Container style={styles.container}>
              <Tabs>
                <Tab heading="Iniciar sesión">
                  <Content>
                    <CardLogin {...this.props} />
                  </Content>
                </Tab>
                <Tab heading="Registrarse">
                  <Content>
                    <CardRegister/>
                  </Content>
                </Tab>
              </Tabs>
            </Container>
          );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});





export default LoginScreen;