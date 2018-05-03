import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import SearchForm from '../components/movieSearch/searchForm';

@connect()
export default class movieSearchContainer extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <View >
        <SearchForm />
      </View>
    );
  }
}
