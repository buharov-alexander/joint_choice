import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { getPosterUrl } from '../server/movie';

function mapStateToProps(state) {
  return {
    currentMovieDetails: state.movie.currentMovieDetails,
  };
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    // minHeight: 200,
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

@connect(mapStateToProps)
export default class MovieDetails extends React.Component {
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
            <Card>
              <Text>{description}</Text>
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}
