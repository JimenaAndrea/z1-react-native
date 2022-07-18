import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { Props } from './types';
import styles from './styles';

// Card component with an horizontal layout.
const HorizontalCardItem: React.FC<Props> = ({ description, footnote, image, onPress, title}) => {
  return(
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.title}>{title.toUpperCase()}</Text>
            <Text style={styles.description} numberOfLines={2}>{description}</Text>
          </View>
          <View>
            <Text style={styles.footnote}>{footnote}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default HorizontalCardItem;