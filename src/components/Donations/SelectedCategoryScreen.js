import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Left, Button, Right, Icon, Body, Title } from "native-base";
import {Image} from 'react-native';

class SelectedCategoryScreen extends Component {
    render(){
        console.log(this.props,'las props')
        const { title, body } = this.props
        return(
            <Container>
                <Content padder>
                <Card>
                    <CardItem button onPress={() => alert("This is Card Header")}>
                    <Text>{title}</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>{title}</Text>
                    </CardItem>
                    <CardItem footer button onPress={() => alert("This is Card Footer")}>
                    <Text>{body}</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>{title}</Text>
                    </CardItem>
                    <CardItem footer button onPress={() => alert("This is Card Footer")}>
                    <Text>{body}</Text>
                    </CardItem>
                </Card>
                
                </Content>
                <Button block style={{marginLeft:10, marginRight:10, marginTop:10}}>
                    <Text>Continuar</Text>
                </Button>
            </Container>
        )
    }
}

export default SelectedCategoryScreen;