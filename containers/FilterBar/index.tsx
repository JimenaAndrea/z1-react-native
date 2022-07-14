import React from 'react';
import { ChipsBar } from '../../components';

import { removeDuplicates } from '../../util';

import { useQuery } from '@apollo/client';
import { GET_ITEMS, LessonData } from '../../graphql';

const FilterBar = () => {
  const {loading, error, data} = useQuery<LessonData>(GET_ITEMS);

  const [chipSelected, setChipSelected] = React.useState<string>('');

  const labels = data?.items?.map((item) => item.category.title);
  const uniqueLabels = removeDuplicates(labels? labels : []);
  const uniqueLabelsAlphabethical = uniqueLabels.sort();

  return (
    <ChipsBar 
      labels={uniqueLabelsAlphabethical} 
      selected={chipSelected} 
      setSelected={setChipSelected} />
  )
}

export default FilterBar;