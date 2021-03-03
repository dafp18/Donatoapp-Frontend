import React, { Component } from 'react';
import {View} from 'react-native';
import CardDonante from './CardDonante';

class HomeDonanteScreen extends Component {
    state={
        title: 'Donar',
        body: 'espacio para info',
    }
    
    render(){
        const {title, body} = this.state
        return(
            <CardDonante 
                title={title}
                body={body}
                {...this.props}
            />
        )
    }
}

export default HomeDonanteScreen;