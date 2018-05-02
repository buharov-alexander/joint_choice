import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'react-native-elements';
import { getPosterUrl } from '../server/movie';
import { MOVIE_DETAILS_SCREEN } from '../constants/screenTypes';

const MovieList = ({ movies, navigation }) => (
  <List>
    {
      movies.toList().map(movie => (
        <ListItem
          avatar={{ uri: getPosterUrl(movie.id) }}
          key={movie.id}
          title={movie.title}
          subtitle={movie.originalTitle}
          onPress={() => navigation.navigate(MOVIE_DETAILS_SCREEN)}
        />
      ))
    }
  </List>
);

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default MovieList;
