import React from 'react';
import { Card, Paragraph, Text } from 'react-native-paper';

import { Props } from './types';

import styles from './styles';

const CardItem: React.FC<Props> = ({ description, footnote, image, title }) => {
  return(
    <Card style={styles.card}>
      <Card.Cover source={{uri: image}} />
      <Card.Title title={title.toUpperCase()} titleStyle={styles.title} />
      <Card.Content>
        <Paragraph style={styles.description}>{description}</Paragraph>
        <Text style={styles.footnote}>{footnote}</Text>
      </Card.Content>
    </Card>
  )
}

export default CardItem;