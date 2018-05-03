import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadMovies, loadMovie } from '../actions/movieActions';
import MovieList from '../components/movieList/movieList';
import SearchMovieButton from '../components/movieList/searchMovieButton';
import { MOVIE_DETAILS_SCREEN, MOVIE_SEARCH_SCREEN } from '../constants/screenTypes';
import { SET_CURRENT_MOVIE_DETAILS } from '../constants/actionTypes';

function mapStateToProps(state) {
  return {
    movies: state.movie.moviesById,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMovies: () => dispatch(loadMovies()),
      loadMovie: movieId => dispatch(loadMovie(movieId)),
      setCurrentMovieDetails: movieId => dispatch({
        type: SET_CURRENT_MOVIE_DETAILS,
        payload: movieId,
      }),
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MovieContainer extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const button = (<SearchMovieButton
      onPress={() => navigation.navigate(MOVIE_SEARCH_SCREEN)}
    />);

    return {
      title: 'Movie',
      headerRight: button,
    };
  };

  static propTypes = {
    actions: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.actions.loadMovies();
  }

  onPressToItem = (movie) => {
    this.props.actions.loadMovie(movie.id);
    this.props.actions.setCurrentMovieDetails(movie.id);
    this.props.navigation.navigate(MOVIE_DETAILS_SCREEN);
  }

  render() {
    return (
      <MovieList
        {...this.props}
        onPressToItem={this.onPressToItem}
      />
    );
  }
}
