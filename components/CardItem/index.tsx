import React from "react";
import { Props } from "./types";
import { Card, Paragraph, Text } from "react-native-paper";

const CardItem: React.FC<Props> = ({ description, footnote, image, title }) => {
  return(
    <Card>
      <Card.Cover source={{uri: image}} />
      <Card.Title title={title} />
      <Card.Content>
        <Paragraph>{description}</Paragraph>
        <Text>{footnote}</Text>
      </Card.Content>
    </Card>
  )
}

export default CardItem;