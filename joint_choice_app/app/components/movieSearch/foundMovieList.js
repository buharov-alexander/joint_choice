import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { getSmallPosterUrl } from '../../server/tmdbMovieApi';

const FoundMovieList = ({ foundMovies, onPressToItem }) => (
  <View>
    <ScrollView>
      <List>
        {
          foundMovies.map(tmdbMovie => (
            <ListItem
              avatar={{ uri: getSmallPosterUrl(tmdbMovie.id) }}
              key={tmdbMovie.id}
              title={tmdbMovie.title}
              subtitle={tmdbMovie.originalTitle}
              onPress={() => onPressToItem(tmdbMovie)}
            />
          ))
        }
      </List>
    </ScrollView>
  </View>
);

FoundMovieList.propTypes = {
  foundMovies: PropTypes.object.isRequired,
  onPressToItem: PropTypes.func.isRequired,
};

export default FoundMovieList;
