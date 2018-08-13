import React from 'react'
// database
import * as firebase from 'firebase'
import firebaseConfig from './config/firebaseConfig'
firebase.initializeApp(firebaseConfig)

import { createSwitchNavigator } from 'react-navigation'
// elements
import Loading from './src/views/elements/loading'
// pages
import SignUp from './src/views/pages/auth/signup'
import Login from './src/views/pages/auth/login'
import Profile from './src/views/pages/general/profile'
import BaseNavigator from './src/views/components/baseNavigator'

const App = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Profile,
    BaseNavigator
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App