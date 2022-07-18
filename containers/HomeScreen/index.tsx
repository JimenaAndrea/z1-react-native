import React from "react";
import { Text, View } from "react-native";

import { AllCardItems, FilterBar } from "../index";

import styles from "./styles";

const HomeScreen = () => {
  const [categorySelected, setCategorySelected] = React.useState<string>("");

  return (
    <View style={styles.containerView}>
      <View style={styles.contentView}>
        <Text style={styles.title}>Learn</Text>
        <FilterBar
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        <AllCardItems category={categorySelected} />
      </View>
    </View>
  );
};

export default HomeScreen;
