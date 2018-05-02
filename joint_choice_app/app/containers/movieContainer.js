import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadMovies } from '../actions/movieActions';
import MovieList from '../components/movieList';

function mapStateToProps(state) {
  return {
    movies: state.movie.moviesById,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getMovies: () => dispatch(loadMovies()),
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MovieContainer extends React.Component {
  static navigationOptions = {
    title: 'Movie',
  };

  static propTypes = {
    actions: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.actions.getMovies();
  }

  render() {
    return (
      <MovieList {...this.props} />
    );
  }
}
