import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'react-native-elements';
import { MOVIE_DETAILS_SCREEN } from '../constants/screenTypes';

const MovieList = ({ movies, navigation }) => (
  <List>
    {
      movies.toList().map(movie => (
        <ListItem
          avatar={{ uri: `http://192.168.1.100:8090/jointchoice/movie/poster/${movie.id}` }}
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
