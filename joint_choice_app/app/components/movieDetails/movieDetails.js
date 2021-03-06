import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

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
    tmdbId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    originalTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    getPoster: PropTypes.func.isRequired,
  }

  render() {
    const {
      tmdbId,
      title,
      originalTitle,
      description,
      getPoster,
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.top}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: getPoster(tmdbId) }}
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
