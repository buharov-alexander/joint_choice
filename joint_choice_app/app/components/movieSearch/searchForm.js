import React from 'react';
import { SearchBar } from 'react-native-elements';

const SearchForm = () => (
  <SearchBar
    lightTheme
    clearIcon
    onChangeText={() => {}}
    onClear={() => {}}
    placeholder="Type Here..."
  />
);

export default SearchForm;
