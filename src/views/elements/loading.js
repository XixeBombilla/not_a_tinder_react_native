import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
// database
import * as firebase from 'firebase'

class Loading extends Component {
  componentDidMount () {
    setTimeout(()=> {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'BaseNavigator' : 'Login')
      })
    }, 500)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Loading