import React from "react";
import { FlatList, View } from "react-native";
import { Chip } from "react-native-paper";

import { Props } from "./types";

import styles from "./styles";

const ChipsBar: React.FC<Props> = ({ labels, selected, setSelected }) => {
  const renderItem = ({ item }: { item: string }) => (
    <Chip
      style={
        selected === item
          ? { ...styles.chip, ...styles.chipSelected }
          : styles.chip
      }
      textStyle={
        selected === item
          ? { ...styles.chipText, ...styles.chipSelectedText }
          : styles.chipText
      }
      onPress={() => setSelected(item)}
    >
      {item}
    </Chip>
  );

  return (
    <FlatList
      data={labels}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.chipsBar}
      ListHeaderComponent={<View style={styles.boundarySeparator} />}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      ListFooterComponent={<View style={styles.boundarySeparator} />}
    />
  );
};

export default ChipsBar;
