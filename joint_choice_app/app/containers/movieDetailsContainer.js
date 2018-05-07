import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieDetails from '../components/movieDetails/movieDetails';
import { getMiddlePosterUrl } from '../server/movieApi';

function mapStateToProps(state) {
  return {
    currentMovieDetails: state.movie.currentMovieDetails,
  };
}

@connect(mapStateToProps)
export default class MovieDetailsContainer extends React.Component {
  static navigationOptions = {
    title: 'Movie Details',
  };

  static propTypes = {
    currentMovieDetails: PropTypes.object.isRequired,
  };

  render() {
    return (
      <MovieDetails
        {...this.props.currentMovieDetails}
        getPoster={getMiddlePosterUrl}
      />
    );
  }
}
