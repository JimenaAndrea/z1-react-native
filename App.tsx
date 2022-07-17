import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import { Text } from 'react-native-paper';

import { AllCardItems, DetailScreen, FilterBar } from './containers';

import { colors } from './styles';

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
        <StatusBar barStyle={'light-content'} backgroundColor={colors.background}/>
        <DetailScreen 
          author={'Ada Lovelace'} category={'Article'} content={'Lorem Ipsum'} image={'https://picsum.photos/700'} title={"Hello World"} />
      </SafeAreaView>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1
  },

  title: { 
    fontSize: 30,
    fontWeight:'bold',
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 20,
    color: colors.onBackground
  },

  workspaceView: {
    maxWidth: 1000,
    alignSelf: 'center',
    width: '100%'
  }
});

export default App;
