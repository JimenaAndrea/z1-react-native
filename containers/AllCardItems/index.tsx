import React from 'react';
import { FlatList } from 'react-native';

import { Props } from './types';

import { CardItem } from '../../components';

import { useQuery } from '@apollo/client';
import { Lesson } from '../../model/schema';
import { GET_ITEMS, LessonData } from '../../graphql';

/*
 * Component that shows a list of card items, one per existing lesson.
 * Also it can show a list of card items, one per existing lesson
 * in a especific category.
 * 
 * Props:
 * - category (optional): the name of the category to filter the lessons by.
 */
const AllCardItems: React.FC<Props> = ({ category }) => {
  const {loading, error, data} = useQuery<LessonData>(GET_ITEMS);

  const targetItems = category? 
    data?.items.filter((item) => item.category.title == category)
    : data?.items;

  const renderItem = ({item} : {item: Lesson}) => (
    <CardItem
      key={item.id}
      description={item.title}
      footnote={item.author}
      image={item.image}
      title={item.category.title} />
  )

  return (
    <FlatList
      data={targetItems}
      renderItem={renderItem} />
  )
}

export default AllCardItems;
