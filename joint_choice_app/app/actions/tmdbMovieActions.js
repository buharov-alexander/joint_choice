import { findMovies } from '../server/tmdbMovieApi';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_QUERY,
  TYPPING_TIMEOUT,
} from '../constants/actionTypes';

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
