import React from 'react';
import { Image, Text, View } from 'react-native';

import { Props } from './types';

const DetailScreen: React.FC<Props> = ({ author, category, content, image, title}) => {
  return (
    <View>
      <Text>{category}</Text>
      <Text>{title}</Text>
      <Text>{author}</Text>
      <Image source={{ uri: image }} style={{height: 300, width: 300}} />
      <Text>{content}</Text>

    </View>
  )
}

export default DetailScreen;