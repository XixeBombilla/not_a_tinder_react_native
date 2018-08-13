import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
// elements
import HeaderPage from '../../elements/headerPage'
// styles
import { generalBase } from '../../../assets/stylesheets/main'

class Messages extends Component {
  render () {
    const { container } = generalBase
    return (
      <View style={ container }>
        <HeaderPage headerTitle="Messages" />
      </View>
    )
  }
}

export default Messages