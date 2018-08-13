import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
// pages
import HomeScreen from '../pages/general/home'
import MessagesScreen from '../pages/general/messages'
import SettingsScreen from '../pages/general/settings'
// elements
import { Icon } from 'react-native-elements'
// style
import { colors } from '../../assets/stylesheets/main'

const BaseNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="emoji-flirt"
          type='entypo'
          color={ tintColor }
          size={24}
        />
      )
    })
  },
  MessagesScreen: {
    screen: MessagesScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="chat"
          type='materialIcons'
          color={ tintColor }
          size={24}
        />
      )
    })
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="settings"
          type='octicons'
          color={ tintColor }
          size={24}
        />
      )
    })
  }
}, {
  tabBarOptions: {
    showLabel: false,
    activeTintColor: colors.activeTintColor,
    inactiveTintColor: colors.inactiveTintColor,
    style: {
      backgroundColor: colors.blueNavi,
      padding: 10
    },
    tabStyle: {}
  }
})

export default BaseNavigator