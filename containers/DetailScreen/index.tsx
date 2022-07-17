import React from 'react';
import { Image, ScrollView, Text, View} from 'react-native';

import { Props } from './types';
import styles from './styles';

const DetailScreen: React.FC<Props> = ({ author, category, content, image, title}) => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.textView}>
        <Text style={styles.category}>{category.toUpperCase()}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.content}>{content}</Text>
    </ScrollView>
  )
}

export default DetailScreen;