import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';

import { DetailScreen, HomeScreen } from './containers';

import { StackProps } from './model';

import { colors } from './styles';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const client = new ApolloClient({
  uri: 'https://tech.z1.digital/graphql',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator<StackProps>();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <SafeAreaView style={styles.screen}>
          <StatusBar barStyle={'light-content'} backgroundColor={colors.background}/>
          <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Details' component={DetailScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1
  }
});

export default App;
