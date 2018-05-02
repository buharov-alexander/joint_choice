import React from 'react';
import { connect } from 'react-redux';
import MovieDetails from '../components/movieDetails';

function mapStateToProps(state) {
  return {
    movies: state.movie.moviesById,
  };
}

@connect(mapStateToProps)
export default class MovieDetailsContainer extends React.Component {
  static navigationOptions = {
    title: 'Movie Details',
  };

  render() {
    return (
      <MovieDetails {...this.props} />
    );
  }
}
