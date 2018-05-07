import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadMovies } from '../actions/movieActions';
import { setCurrentTmdbMovieDetails } from '../actions/movieDetailsActions';
import MovieList from '../components/movieList/movieList';
import SearchMovieButton from '../components/movieList/searchMovieButton';
import { TMDB_MOVIE_DETAILS_SCREEN, MOVIE_SEARCH_SCREEN } from '../constants/screenTypes';

function mapStateToProps(state) {
  return {
    movies: state.movie.moviesById,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMovies: () => dispatch(loadMovies()),
      setCurrentTmdbMovieDetails: tmdbMovieId => dispatch(setCurrentTmdbMovieDetails(tmdbMovieId)),
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
    this.props.actions.setCurrentTmdbMovieDetails(movie.tmdbId);
    this.props.navigation.navigate(TMDB_MOVIE_DETAILS_SCREEN);
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
