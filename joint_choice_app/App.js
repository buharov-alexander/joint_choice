
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import MovieList from './app/components/MovieList';

export default class App extends React.Component {

  render() {
    return (
      <View >
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Movie', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <MovieList/>
      </View>
    );
  }
}
