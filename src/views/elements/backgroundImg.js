import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import { generalBase, containers } from '../../assets/stylesheets/main'

const urlImg = 'https://www.wellandgood.com/wp-content/uploads/2018/02/Stocksy-Chic-Woman-Alexey-Kuzma.jpg'

class BackgroundImg extends Component {
  render () {
    const { source, children } = this.props
    const { backgroundImg } = containers
    return (
      <View style={ backgroundImg }>
        <Image
          style={{width: '100%', height: 200, position: 'absolute'}}
          source={{uri: urlImg || source }}
        />
        <View style={{position: 'absolute', width: '100%'}}>{ children }</View>
      </View> 
    )
  }
}

export default BackgroundImg