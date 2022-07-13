import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { CardItem } from '../../components';
import { Lesson } from '../../model/schema';
import { FlatList } from 'react-native';

const GET_ITEMS = gql`
  query GetItems {
    items{
      author
      category {
        id
        title
      }
      content
      id
      image
      title
    }
  }
`

interface LessonData {
  items: Lesson[]
}

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
