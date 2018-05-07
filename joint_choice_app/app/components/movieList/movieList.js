import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { getSmallPosterUrl } from '../../server/movieApi';

const MovieList = ({ movies, onPressToItem }) => (
  <View>
    <ScrollView>
      <List>
        {
          movies.toList().map(movie => (
            <ListItem
              avatar={{ uri: getSmallPosterUrl(movie.id) }}
              key={movie.id}
              title={movie.title}
              subtitle={movie.originalTitle}
              onPress={() => onPressToItem(movie)}
            />
          ))
        }
      </List>
    </ScrollView>
  </View>
);

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
  onPressToItem: PropTypes.func.isRequired,
};

export default MovieList;
