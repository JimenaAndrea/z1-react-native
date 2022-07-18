import React from "react";
import { View } from "react-native";
import { FlatGrid } from "react-native-super-grid";

import { useNavigation } from "@react-navigation/native";

import { Props } from "./types";
import { NavigationProp } from "../../model";

import styles from "./styles";

import { VerticalCardItem, HorizontalCardItem } from "../../components";

import { useQuery } from "@apollo/client";
import { Lesson } from "../../model/schema";
import { GET_ITEMS, LessonData } from "../../graphql";

/*
 * Component that shows a list of card items, one per existing lesson.
 * Also it can show a list of card items, one per existing lesson
 * in a especific category.
 *
 * The list with all the lessons has cards with a vertical layout displayed
 * in a two column grid.
 * The list with the lessons in one category has cards with an horizontal
 * layout displayed in a single column.
 *
 * Props:
 * - category (optional): the name of the category to filter the lessons by.
 */
const AllCardItems: React.FC<Props> = ({ category }) => {
  const { loading, error, data } = useQuery<LessonData>(GET_ITEMS);

  const navigation = useNavigation<NavigationProp>();

  const targetItems = category
    ? data?.items.filter((item) => item.category.title == category)
    : data?.items;

  const verticalCardItem = ({ item }: { item: Lesson }) => (
    <VerticalCardItem
      key={item.id}
      description={item.title}
      footnote={item.author}
      image={item.image}
      onPress={() => navigation.navigate("Details", { lesson: item })}
      title={item.category.title}
    />
  );

  const horizontalCardItem = ({ item }: { item: Lesson }) => (
    <HorizontalCardItem
      key={item.id}
      description={item.title}
      footnote={item.author}
      image={item.image}
      onPress={() => navigation.navigate("Details", { lesson: item })}
      title={item.category.title}
    />
  );

  const cardItems = category ? horizontalCardItem : verticalCardItem;

  return (
    <FlatGrid
      data={targetItems ? targetItems : []}
      renderItem={cardItems}
      itemDimension={category ? 300 : 150}
      maxItemsPerRow={category ? 2 : 4}
      spacing={10}
      style={styles.grid}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
};

export default AllCardItems;
