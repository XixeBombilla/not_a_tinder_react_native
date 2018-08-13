import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { containers, generalBase } from '../../assets/stylesheets/main'

class HeaderPage extends Component {
  render () {
    const { header } = containers
    const { titleHeader } = generalBase
    const { headerTitle, color } = this.props
    return (
      <View style={ header }>
       <Text style={ titleHeader }>{ headerTitle }</Text>
      </View> 
    )
  }
}

export default HeaderPage