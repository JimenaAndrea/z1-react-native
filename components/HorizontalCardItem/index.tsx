import React from 'react';
import { Image, Text, View } from 'react-native';

import { Props } from './types';
import styles from './styles';

// Card component with an horizontal layout.
const HorizontalCardItem: React.FC<Props> = ({ description, footnote, image, title}) => {
  return(
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
  )
}

export default HorizontalCardItem;