import { StyleSheet } from 'react-native'
import colors from './colors'

const generalBase = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start'
  },
  whiteText: {
    color: 'white'
  },
  generalPadding: {
    padding: 10
  },
  icon: {
    backgroundColor: 'white',
    padding: 10,
    width: 50
  },
  title: {
    fontSize: 20
  },
  titleHeader: {
    fontSize: 20,
    color: 'white'
  }
})

export default generalBase