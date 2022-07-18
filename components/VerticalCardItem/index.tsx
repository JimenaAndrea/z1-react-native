import React from 'react';
import { Image } from 'react-native';
import { Card, Paragraph, Text } from 'react-native-paper';

import { Props } from './types';

import styles from './styles';

const VerticalCardItem: React.FC<Props> = ({ description, footnote, image, onPress, title }) => {
  return(
    <Card style={styles.card} onPress={onPress}>
      <Image source={{uri: image}} style={{aspectRatio: 3/2}}/>
      <Card.Title title={title.toUpperCase()} titleStyle={styles.title} />
      <Card.Content>
        <Paragraph style={styles.description}>{description}</Paragraph>
        <Text style={styles.footnote}>{footnote}</Text>
      </Card.Content>
    </Card>
  )
}

export default VerticalCardItem;