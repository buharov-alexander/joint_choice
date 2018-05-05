import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { getPosterUrl } from '../../server/movieApi';

const styles = StyleSheet.create({
  top: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  down: {
    flex: 2,
  },
  image: {
    flex: 1,
  },
  info: {
    flex: 1,
  },
});

export default class MovieDetails extends React.PureComponent {
  static propTypes = {
    currentMovieDetails: PropTypes.object.isRequired,
  }

  render() {
    const {
      id,
      title,
      originalTitle,
      description,
    } = this.props.currentMovieDetails;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.top}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: getPosterUrl(id) }}
          />
          <View style={styles.info}>
            <Text>{title}</Text>
            <Text>{originalTitle}</Text>
          </View>
        </View>
        <View style={styles.down}>
          <ScrollView>
            <Text>{description}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
