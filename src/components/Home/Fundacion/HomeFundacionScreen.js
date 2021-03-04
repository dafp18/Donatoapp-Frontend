import React, { Component } from 'react';
import CardFundacion from './CardFundacion';

class HomeFundacionScreen extends Component {
       
    render(){
        return(
            <CardFundacion
                {...this.props}
            />
        )
    }
}

export default HomeFundacionScreen;