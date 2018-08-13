import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import * as firebase from 'firebase'
// elements
import HeaderPage from '../../elements/headerPage'
// styles
import { generalBase } from '../../../assets/stylesheets/main'

class Profile extends Component {
  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) return
      this.props.navigation.navigate('Login')
    })
  }
  render () {
    const { container } = generalBase
    return (
      <View style={ container }>
        <HeaderPage headerTitle="Profile" />
      </View>
    )
  }
}

export default Profile