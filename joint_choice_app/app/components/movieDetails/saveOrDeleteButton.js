import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { saveTmdbMovie, deleteTmdbMovie } from '../../actions/tmdbMovieActions';
import { SAVED, NOT_SAVED } from '../../constants/movieStatus';
import { SET_MOVIE_STATUS } from '../../constants/actionTypes';

const styles = StyleSheet.create({
  button: {
    marginRight: 30,
  },
});

function mapStateToProps(state) {
  return {
    currentTmdbMovieDetails: state.tmdb.currentTmdbMovieDetails,
    currentTmdbMovieStatus: state.tmdb.currentTmdbMovieStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      saveTmdbMovie: tmdbMovieId => dispatch(saveTmdbMovie(tmdbMovieId)),
      deleteTmdbMovie: tmdbMovieId => dispatch(deleteTmdbMovie(tmdbMovieId)),
      setMovieStatus: status => dispatch({
        type: SET_MOVIE_STATUS,
        payload: status,
      }),
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class SaveOrDeleteButton extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    currentTmdbMovieDetails: PropTypes.object.isRequired,
    currentTmdbMovieStatus: PropTypes.string.isRequired,
  };

  pressOnSaveIcon = (tmdbMovieId) => {
    this.props.actions.saveTmdbMovie(tmdbMovieId);
    this.props.actions.setMovieStatus(SAVED);
  }

  pressOnDeleteIcon = (tmdbMovieId) => {
    this.props.actions.deleteTmdbMovie(tmdbMovieId);
    this.props.actions.setMovieStatus(NOT_SAVED);
  }

  render() {
    const { tmdbId } = this.props.currentTmdbMovieDetails;
    return (
      <View style={styles.button}>
        {this.props.currentTmdbMovieStatus === SAVED ?
          <Icon
            type="ionicon"
            name="md-star"
            color="#ff9933"
            size={35}
            onPress={() => this.pressOnDeleteIcon(tmdbId)}
          />
          :
          <Icon
            type="ionicon"
            name="md-star-outline"
            color="#ff9933"
            size={35}
            onPress={() => this.pressOnSaveIcon(tmdbId)}
          />
        }
      </View>
    );
  }
}
