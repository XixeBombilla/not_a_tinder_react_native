import React, { Component } from 'react'
import { Text, View, Button, Alert } from 'react-native'
import * as firebase from 'firebase'
// elements 
import HeaderPage from '../../elements/headerPage'
import { ListItem } from 'react-native-elements'
// styles
import { generalBase } from '../../../assets/stylesheets/main'

class Settings extends Component {
  state = { 
    loading: false,
    list: [
      {
        title: 'Logout',
        icon: 'phone'
      }
    ],
    errorMessage: null
  }
  logout = async () => {
    const { navigate } = this.props.navigation
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => navigate('Login'))
    } catch(error) {
      this.setState({ errorMessage: error.message })
    }
  }
  _getAction = (item) => {
    switch (item) {
      case 'Logout':
        return Alert.alert(
          'Are your sure you want to logout?',
          '',
          [ 
            { text: 'Cancel', onPress: () => {}, style: 'cancel'},
            { text: 'OK', onPress: () => this.logout() } 
          ],
          { cancelable: false }
        )
      default: return null
    }
  }

  render () {
    const { container } = generalBase
    const { list, errorMessage, loading } = this.state
    return (
      <View>
        <HeaderPage headerTitle="Settings" />
        <View>
          { errorMessage &&
            <Text style={{ color: 'red' }}>
              { errorMessage }
            </Text>
          }
          { list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                onPress={() => {this._getAction(item.title)}}
              />
            ))
          }
        </View>
      </View>
    )
  }
}

export default Settings

