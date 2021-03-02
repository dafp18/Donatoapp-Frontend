import React from 'react';
import { Container, Header, Content, Tab, Tabs, Text,} from 'native-base';
import { StyleSheet,View } from 'react-native';

class LoginScreen extends React.Component{
  
  render(){
    return(
            <Container style={styles.container}>
              <Tabs>
                <Tab heading="Iniciar sesión">
                  <Content>
                    <Text>Tab 1 inicio de sesion</Text>
                  </Content>
                </Tab>
                <Tab heading="Registrarse">
                  <Content>
                    <Text>Tab 2 registro</Text>
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