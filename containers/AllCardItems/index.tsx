import React from 'react';
import { FlatList } from 'react-native';

import { Props } from './types';

import { CardItem, HorizontalCardItem } from '../../components';

import { useQuery } from '@apollo/client';
import { Lesson } from '../../model/schema';
import { GET_ITEMS, LessonData } from '../../graphql';

/*
 * Component that shows a list of card items, one per existing lesson.
 * Also it can show a list of card items, one per existing lesson
 * in a especific category.
 * 
 * The list with all the lessons has cards with a vertical layout.
 * The list with the lessons in one category has cards with an horizontal layout.
 * 
 * Props:
 * - category (optional): the name of the category to filter the lessons by.
 */
const AllCardItems: React.FC<Props> = ({ category }) => {
  const {loading, error, data} = useQuery<LessonData>(GET_ITEMS);

  const targetItems = category? 
    data?.items.filter((item) => item.category.title == category)
    : data?.items;

  const verticalCardItem = ({item} : {item: Lesson}) => (
    <CardItem
      key={item.id}
      description={item.title}
      footnote={item.author}
      image={item.image}
      title={item.category.title} />
  )
  const horizontalCardItem = ({item} : {item: Lesson}) => (
    <HorizontalCardItem
      key={item.id}
      description={item.title}
      footnote={item.author}
      image={item.image}
      title={item.category.title} />
  )
  const cardItems = category?
  horizontalCardItem
  : verticalCardItem
  

  return (
    <FlatList
      data={targetItems}
      renderItem={cardItems} />
  )
}

export default AllCardItems;
