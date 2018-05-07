import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { getSmallPosterUrl } from '../../server/tmdbMovieApi';

const FoundMovieList = ({ foundMovies }) => (
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
              onPress={() => { }}
            />
          ))
        }
      </List>
    </ScrollView>
  </View>
);

FoundMovieList.propTypes = {
  foundMovies: PropTypes.object.isRequired,
};

export default FoundMovieList;
