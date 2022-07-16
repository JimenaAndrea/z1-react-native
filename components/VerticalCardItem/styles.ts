import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
  card: {
    backgroundColor: '#5a0366',
    borderRadius: 20,
    overflow: 'hidden',
    flex: 1
  },
  title: {
    color: 'gold',
    fontSize: 14
  },
  description: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: -5
  },
  footnote: {
    color: 'white',
    marginTop: 3
  }
})

export default styles;