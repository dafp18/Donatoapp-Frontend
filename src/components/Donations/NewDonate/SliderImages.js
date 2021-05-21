import React, { Component } from 'react';
import { View, Image, ScrollView, Dimensions, Text } from 'react-native';
import FastImage from 'react-native-fast-image'

const {width} = Dimensions.get('window');
const height = width * 0.5; 

class SliderImages extends Component {
    state={ active:0 }

    change = ({nativeEvent}) => {
        const slide = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if(slide !== this.state.active){ this.setState({active:slide}) }
    }
 
    render(){
        return(
                <View style={{width, height}}>
                    <ScrollView pagingEnabled
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                onScroll={this.change}
                                style={{width, height}}>
                        {   this.props.dataImages?.map((img, index) => {
                                return <FastImage key={`slide_img_${index}`} source={{uri:img}} style={{width, height}} resizeMode={FastImage.resizeMode.contain} />
                            })  
                        }
                    </ScrollView>
                    <View style={{flexDirection:'row',position:'absolute', bottom:-25, alignSelf:'center'}}>
                        {   this.props.dataImages?.map((i, k) => {
                                return <Text key={`dock_${k}`} style={{margin:3, color: k === this.state.active ? '#243949' :'#888', fontSize:20}}>⬤</Text>
                            })  
                        }
                    </View>        
                </View>       
        )
    }
}

export default SliderImages;