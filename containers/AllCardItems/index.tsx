import React from 'react';
import { FlatList } from 'react-native';

import { CardItem } from '../../components';

import { useQuery } from '@apollo/client';
import { Lesson } from '../../model/schema';
import { GET_ITEMS, LessonData } from '../../graphql';

const AllCardItems = () => {
  const {loading, error, data} = useQuery<LessonData>(GET_ITEMS);

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
      data={data?.items}
      renderItem={renderItem} />
  )
}

export default AllCardItems;
