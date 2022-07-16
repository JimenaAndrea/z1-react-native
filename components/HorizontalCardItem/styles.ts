import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    backgroundColor: '#5a0366',
    borderRadius: 7
  },

  description: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },

  footnote: {
    color: 'white'
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 7,
    margin: 10
  },

  textContainer: {
    flex: 1,
    marginVertical: 10,
    justifyContent: 'space-between',
    marginRight: 10
  },
  
  title: {
    color: 'gold',
    fontSize: 14,
    marginBottom: 5
  }

})

export default styles;