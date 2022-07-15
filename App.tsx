import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Text } from 'react-native-paper';

import { AllCardItems, FilterBar } from './containers';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tech.z1.digital/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [categorySelected, setCategorySelected] = React.useState<string>('');

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.screen}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#3F0259'}/>
          <Text style={styles.title}>Learn</Text>
          <FilterBar categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
          <AllCardItems category={categorySelected} />
      </SafeAreaView>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  title: { 
    fontSize: 30,
    fontWeight:'bold',
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 20,
    color: 'white'
  },
  screen: {
    backgroundColor: '#3F0259'
  }
});

export default App;
