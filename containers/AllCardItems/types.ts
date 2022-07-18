import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackProps } from '../../App';

export type NavigationProp = NativeStackNavigationProp<StackProps>;

export interface Props {
  category?: string
}