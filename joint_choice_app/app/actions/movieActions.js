import { fetchMovies, fetchMovie } from '../server/movieApi';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIE_SUCCESS,
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
