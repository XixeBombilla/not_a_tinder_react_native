import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight } from 'react-native'
// elements
import BackgroundImg from '../elements/backgroundImg'
import { Icon } from 'react-native-elements'

import { generalBase, containers } from '../../assets/stylesheets/main'

const urlImg = 'https://www.wellandgood.com/wp-content/uploads/2018/02/Stocksy-Chic-Woman-Alexey-Kuzma.jpg'

class HeaderProfile extends Component {
  render () {
    const { source, children, currentUser } = this.props
    const { HeaderProfile } = containers
    const { profile } = containers
    const { container, whiteText, icon } = generalBase
    return (
      <BackgroundImg>
        <View style={ profile }>
          <Text style={ whiteText }>
            Hi { currentUser && currentUser.email }!
          </Text>
          <TouchableHighlight style={ icon } onPress={() => navigate('Profile')}>
            <Icon
              name="user"
              type='feather'
              size={24}
            />
          </TouchableHighlight>
        </View>
      </BackgroundImg>
    )
  }
}

export default HeaderProfile