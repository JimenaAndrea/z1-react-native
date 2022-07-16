import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
  chip: {
    borderRadius: 7, 
    justifyContent: 'center',
    backgroundColor: '#631874'
  },

  chipSelected: {
    backgroundColor: '#ae51b6'
  },

  chipText: {
    color: 'white', 
    fontWeight: 'bold'
  },
  
  chipsBar: {
    marginVertical: 10
  },

  itemSeparator: {
    width: 10
  },

  boundarySeparator: {
    width: 15
  }
})

export default styles;