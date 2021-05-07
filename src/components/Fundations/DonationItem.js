import React, { Component } from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Button, Title} from 'native-base';

class DonationItem extends Component {
    
    render() {
          return (
                    
                    <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#c3c3c3'}}>
                        <Image  source={{ uri: 'https://dafitistaticco-a.akamaihd.net/p/frenezi-4816-840539-1-zoom.jpg' }}  
                                style={{height:80, width:80, margin:10}} 
                        />
                        <Title style={{color:'#000',marginTop:10, marginLeft:5, marginRight:5}}>Chaqueta para hombre color..</Title>                     
                    </View>

          );
    }
}

const styles = StyleSheet.create({
  

});

export default DonationItem;