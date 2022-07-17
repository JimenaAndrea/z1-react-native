import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

const styles = StyleSheet.create ({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    overflow: 'hidden',
    flex: 1
  },
  title: {
    color: colors.accent,
    fontSize: 14
  },
  description: {
    color: colors.onSurface,
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: -5
  },
  footnote: {
    color: colors.onSurface,
    marginTop: 3
  }
})

export default styles;