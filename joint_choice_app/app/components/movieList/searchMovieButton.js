import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  searchButton: {
    margin: 15,
  },
});

const SearchMovieButton = ({ onPress }) => (
  <View style={styles.searchButton}>
    <Icon
      type="ionicon"
      name="md-search"
      onPress={onPress}
    />
  </View>
);

SearchMovieButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default SearchMovieButton;
