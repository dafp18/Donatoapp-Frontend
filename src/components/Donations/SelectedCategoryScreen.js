import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Spinner, Button, Footer } from "native-base";
import {Image} from 'react-native';

class SelectedCategoryScreen extends Component {
    handleContinue = () =>{
        this.props.navigation.navigate('DataDonation')
    }
    render(){
        console.log(this.props, 'categorias')
        return(
            <Container>
                <Content padder>
                <Spinner />
                <Card>
                    <CardItem button onPress={this.handleContinue}>
                    <Text>Alimentos</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>Juguetes</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>Ortopedicos</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>Medicinas</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>Electrodomesticos</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>Electrodomesticos</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>Electrodomesticos</Text>
                    </CardItem>
                </Card>
                <Card>
                    
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>Electrodomesticos</Text>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        )
    }
}

export default SelectedCategoryScreen;