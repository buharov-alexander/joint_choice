import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const FoundMovieList = ({ foundMovies }) => (
  <View>
    <ScrollView>
      <List>
        {
          foundMovies.map(movie => (
            <ListItem
              key={movie.id}
              title={movie.title}
              subtitle={movie.originalTitle}
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
