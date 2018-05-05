import { fetchMovies, fetchMovie } from '../server/movieApi';
import { findMovies } from '../server/tmdbMovieApi';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIE_SUCCESS,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_QUERY,
  TYPPING_TIMEOUT,
} from '../constants/actionTypes';

export const loadMovies = () =>
  (dispatch) => {
    dispatch({ type: FETCH_REQUEST, payload: 'loadMovies' });

    fetchMovies()
      .then(response => response.json())
      .then((responseJson) => {
        dispatch({ type: LOAD_MOVIES_SUCCESS, payload: responseJson });
        dispatch({ type: FETCH_SUCCESS, payload: 'loadMovies' });
      })
      .catch(error => dispatch({ type: FETCH_FAILED, payload: `loadMovies: ${error}` }));
  };

export const loadMovie = movieId =>
  (dispatch) => {
    dispatch({ type: FETCH_REQUEST, payload: 'loadMovie' });

    fetchMovie(movieId)
      .then(response => response.json())
      .then((responseJson) => {
        dispatch({ type: LOAD_MOVIE_SUCCESS, payload: responseJson });
        dispatch({ type: FETCH_SUCCESS, payload: 'loadMovie' });
      })
      .catch(error => dispatch({ type: FETCH_FAILED, payload: `loadMovie: ${error}` }));
  };

export const searchMovies = text =>
  (dispatch) => {
    dispatch({ type: SEARCH_MOVIE_QUERY, payload: text });
    if (!text) {
      dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: [] });
      dispatch({ type: TYPPING_TIMEOUT, payload: 0 });
      return;
    }
    dispatch({ type: FETCH_REQUEST, payload: 'searchMovies' });

    findMovies(text)
      .then(response => response.json())
      .then((responseJson) => {
        dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: responseJson });
        dispatch({ type: FETCH_SUCCESS, payload: 'searchMovies' });
        dispatch({ type: TYPPING_TIMEOUT, payload: 0 });
      })
      .catch(error => dispatch({ type: FETCH_FAILED, payload: `loadMovies: ${error}` }));
  };
