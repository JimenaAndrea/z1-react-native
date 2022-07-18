import React from 'react';
import { Image, ScrollView, Text, View} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { DetailScreenRouteProp } from './types';
import styles from './styles';


const DetailScreen: React.FC = () => {

  const route = useRoute<DetailScreenRouteProp>()
  const lesson = route.params.lesson

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.textView}>
        <Text style={styles.category}>{lesson.category.title.toUpperCase()}</Text>
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.author}>{lesson.author}</Text>
      </View>
      <Image source={{ uri: lesson.image }} style={styles.image} />
      <Text style={styles.content}>{lesson.content}</Text>
    </ScrollView>
  )
}

export default DetailScreen;