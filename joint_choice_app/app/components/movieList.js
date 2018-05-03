import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'react-native-elements';
import { getPosterUrl } from '../server/movie';

const MovieList = ({ movies, onPressToItem }) => (
  <List>
    {
      movies.toList().map(movie => (
        <ListItem
          avatar={{ uri: getPosterUrl(movie.id) }}
          key={movie.id}
          title={movie.title}
          subtitle={movie.originalTitle}
          onPress={() => onPressToItem(movie)}
        />
      ))
    }
  </List>
);

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
  onPressToItem: PropTypes.func.isRequired,
};

export default MovieList;
