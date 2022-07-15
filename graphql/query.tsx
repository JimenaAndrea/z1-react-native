import { gql } from '@apollo/client';
import { Lesson } from '../model';


export const GET_ITEMS = gql`
  query GetItems {
    items{
      author
      category {
        id
        title
      }
      content
      id
      image
      title
    }
  }
`

export interface LessonData {
  items: Lesson[]
}