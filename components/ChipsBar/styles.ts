import { StyleSheet } from "react-native";

import { colors } from "../../styles";

const styles = StyleSheet.create({
  chip: {
    borderRadius: 7,
    justifyContent: "center",
    backgroundColor: colors.primary,
    padding: 1,
  },

  chipSelected: {
    backgroundColor: colors.secondary,
  },

  chipText: {
    color: colors.onPrimary,
    fontWeight: "bold",
  },

  chipSelectedText: {
    color: colors.onSecondary,
  },

  chipsBar: {
    marginVertical: 10,
  },

  itemSeparator: {
    width: 10,
  },

  boundarySeparator: {
    width: 15,
  },
});

export default styles;
