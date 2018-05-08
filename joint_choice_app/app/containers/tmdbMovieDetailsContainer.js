import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import MovieDetails from '../components/movieDetails/movieDetails';
import SaveOrDeleteButton from '../components/movieDetails/saveOrDeleteButton';
import { getMiddlePosterUrl } from '../server/movieDetailsApi';
import { CLEAR_CURRENT_TMDB_MOVIE_DETAILS } from '../constants/actionTypes';

function mapStateToProps(state) {
  return {
    currentTmdbMovieDetails: state.tmdb.currentTmdbMovieDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      clearCurrentTmdbMovieDetails: () => dispatch({
        type: CLEAR_CURRENT_TMDB_MOVIE_DETAILS,
      }),
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class TmdbMovieDetailsContainer extends React.Component {
  static navigationOptions = {
    title: 'Movie Details',
    headerRight: <SaveOrDeleteButton />,
  };

  static propTypes = {
    actions: PropTypes.object.isRequired,
    currentTmdbMovieDetails: PropTypes.object.isRequired,
  };

  componentWillUnmount() {
    this.props.actions.clearCurrentTmdbMovieDetails();
  }

  render() {
    return (
      this.props.currentTmdbMovieDetails.tmdbId ?
        <MovieDetails
          {...this.props.currentTmdbMovieDetails}
          getPoster={getMiddlePosterUrl}
        />
        :
        <ActivityIndicator size="large" color="#0000ff" />
    );
  }
}
