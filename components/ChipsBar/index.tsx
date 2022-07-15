import React from "react";
import { FlatList } from "react-native";
import { Chip } from 'react-native-paper';
import { Props } from './types';

const ChipsBar: React.FC<Props> = ({ labels, selected, setSelected }) => {
  const renderItem = ({ item }: {item: string}) => (
    <Chip 
      selected={selected===item} 
      onPress={() => setSelected(item)}>
        {item}
    </Chip>
  )
  

  return( 
    <FlatList
      data={labels}
      renderItem={renderItem}
      keyExtractor={item => item}
      horizontal={true} />
  )
}

export default ChipsBar;