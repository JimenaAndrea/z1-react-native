import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Lesson } from './schema';

export type StackProps = {
  Home: undefined;
  Details: { lesson: Lesson };
}

export type NavigationProp = NativeStackNavigationProp<StackProps>;