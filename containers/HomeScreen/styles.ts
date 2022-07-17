import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

const styles = StyleSheet.create({
  title: { 
    fontSize: 30,
    fontWeight:'bold',
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 20,
    color: colors.onBackground
  },

  workspaceView: {
    maxWidth: 1000,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: colors.background
  }
})

export default styles;