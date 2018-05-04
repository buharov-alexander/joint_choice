import React from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';

const SearchForm = ({ onChangeText }) => (
  <SearchBar
    lightTheme
    clearIcon
    onChangeText={onChangeText}
    onClear={() => {}}
    placeholder="Type Here..."
  />
);

SearchForm.propTypes = {
  onChangeText: PropTypes.func.isRequired,
};

export default SearchForm;
