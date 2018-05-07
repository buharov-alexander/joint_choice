import { findMovies, fetchTmdbMovie } from '../server/tmdbMovieApi';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_QUERY,
  TYPPING_TIMEOUT,
  SET_CURRENT_TMDB_MOVIE_DETAILS,
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

export const setCurrentTmdbMovieDetails = tmdbMovieId =>
  (dispatch) => {
    dispatch({ type: FETCH_REQUEST, payload: 'loadTmdbMovie' });

    fetchTmdbMovie(tmdbMovieId)
      .then(response => response.json())
      .then((responseJson) => {
        dispatch({ type: SET_CURRENT_TMDB_MOVIE_DETAILS, payload: responseJson });
        dispatch({ type: FETCH_SUCCESS, payload: 'loadTmdbMovie' });
      })
      .catch(error => dispatch({ type: FETCH_FAILED, payload: `loadTmdbMovie: ${error}` }));
  };
