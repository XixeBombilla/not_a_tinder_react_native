import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import * as firebase from 'firebase'
// elements
import HeaderProfile from '../../components/HeaderProfile'
// styles
import { generalBase, containers } from '../../../assets/stylesheets/main'

class HomeScreen extends Component {
  state = { currentUser: null }
  componentWillMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }
  render () {
    const { currentUser } = this.state
    const { navigate } = this.props.navigation
    const { container } = generalBase
    return (
      <View style={ container }>
        <HeaderProfile currentUser={currentUser} />
        <Button
            title="Go other"
            onPress={() => navigate('OtherScreen')}
          />
      </View>
    )
  }
}

export default HomeScreen