import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class DetalleDonacionScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
                          
                <Body>
                  <Text>Chaqueta azul talla 14</Text>
                  <Text note>Categoria: Ropa</Text>
                </Body>
              
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://dafitistaticco-a.akamaihd.net/p/frenezi-4816-840539-1-zoom.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Text>Chaqueta azul talla M poco uso de niño se regala porque ya se le quedó</Text>  
            </CardItem>
            <CardItem>
                <Text>Estado:</Text>
                <Text>Usado</Text>
            </CardItem>
            <CardItem>
                <Text>Cant:</Text>
                <Text>1</Text>
            </CardItem>
            <CardItem>
                <Text>Ubicación:</Text>
                <Text>Suba</Text>
            </CardItem>   
            
              
          </Card>
          <Button block>
                    <Text>Lo quiero!</Text>
                </Button>
        </Content>
      </Container>
    );
  }
}

export default DetalleDonacionScreen;