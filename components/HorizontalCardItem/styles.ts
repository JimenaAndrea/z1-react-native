import { StyleSheet } from "react-native";

import { colors } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderRadius: 7,
  },

  description: {
    color: colors.onSurface,
    fontSize: 18,
    fontWeight: "bold",
  },

  footnote: {
    color: colors.onSurface,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 7,
    margin: 10,
  },

  textContainer: {
    flex: 1,
    marginVertical: 10,
    justifyContent: "space-between",
    marginRight: 10,
  },

  title: {
    color: colors.accent,
    fontSize: 14,
    marginBottom: 5,
  },
});

export default styles;
