import React from 'react';

import { Props } from './types';

import { ChipsBar } from '../../components';

import { removeDuplicates } from '../../util';

import { useQuery } from '@apollo/client';
import { GET_ITEMS, LessonData } from '../../graphql';

/*
 * Component that shows one button per existing item category
 * in an horizontal bar, and allows selecting one of them.
 * It shows an additional button for selecting all categories.
 * 
 * Props:
 * - allLabel (optional): label for the additional button that
 *  selects all categories.
 * - categorySelected: the name of the category to be shown
 *  as selected.
 * - setCategorySelected: function to be called when the user
 *  selects a category. The name of the category will be passed
 *  as an argument. If the "All categories" button is selected,
 *  an empty string will be passed instead.
 */
const FilterBar: React.FC<Props> = ({ allLabel='All', categorySelected, setCategorySelected }) => {
  const {loading, error, data} = useQuery<LessonData>(GET_ITEMS);

  const labels = data?.items?.map((item) => item.category.title);
  const uniqueLabels = removeDuplicates(labels? labels : []);
  const uniqueLabelsAlphabethical = [allLabel, ...uniqueLabels.sort()];

  function setChipSelected(category: string): void {
    if(category !== allLabel){
      setCategorySelected(category)
    }else{
      // Set selected chip to '' if the "All" filter is selected
      setCategorySelected('')
    }
  }

  return (
    <ChipsBar 
      labels={uniqueLabelsAlphabethical} 
      selected={categorySelected? categorySelected : allLabel} 
      setSelected={setChipSelected} />
  )
}

export default FilterBar;