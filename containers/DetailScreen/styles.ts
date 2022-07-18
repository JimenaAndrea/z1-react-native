import { StyleSheet } from "react-native";

import { colors } from "../../styles";

const styles = StyleSheet.create({
  author: {
    color: colors.onSurface,
  },

  category: {
    color: colors.accent,
    fontSize: 14,
  },

  content: {
    color: colors.onSurface,
    fontSize: 16,
    margin: 20,
  },

  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderRadius: 7,
  },

  contentView: {
    backgroundColor: colors.background,
    maxWidth: 1000,
    alignSelf: "center",
    width: "100%"
  },

  containerView: {
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  textView: {
    margin: 20,
  },

  title: {
    color: colors.onSurface,
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 10,
  },
});

export default styles;
