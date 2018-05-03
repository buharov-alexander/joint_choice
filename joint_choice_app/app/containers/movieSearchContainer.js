import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

@connect()
export default class movieSearchContainer extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <View >
        <Text>Search page</Text>
      </View>
    );
  }
}
