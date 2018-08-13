import { StyleSheet } from 'react-native'
import colors from '../base/colors'

const containers = StyleSheet.create({
  header: {
    paddingTop: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blueNavi,
    width: '100%',
    height: 100
  },
  backgroundImg: {
    width: '100%',
    height: 200,
    backgroundColor: colors.inactiveTintColor
  },
  profile: {
    paddingTop: 50,
    padding: 10,
    flex: 1,
    justifyContent: 'center'
  },
})

export default containers