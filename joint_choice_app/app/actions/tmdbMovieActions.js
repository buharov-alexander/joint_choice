import { searchMoviesRequest, saveTmdbMovieRequest, deleteTmdbMovieRequest } from '../server/tmdbMovieApi';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_QUERY,
  TYPPING_TIMEOUT,
  SAVE_TMDB_MOVIE_SUCCESS,
  DELETE_TMDB_MOVIE_SUCCESS,
} from '../constants/actionTypes';

export const searchMovies = text =>
  (dispatch) => {
    dispatch({ type: SEARCH_MOVIE_QUERY, payload: text });
    if (!text) {
      dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: [] });
      dispatch({ type: TYPPING_TIMEOUT, payload: 0 });
      return;
    }
    dispatch({ type: FETCH_REQUEST, payload: `searchMovies ${text}` });

    searchMoviesRequest(text)
      .then(response => response.json())
      .then((responseJson) => {
        dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: responseJson });
        dispatch({ type: FETCH_SUCCESS, payload: `searchMovies ${text}` });
        dispatch({ type: TYPPING_TIMEOUT, payload: 0 });
      })
      .catch(error => dispatch({ type: FETCH_FAILED, payload: `searchMovies ${text}: ${error}` }));
  };

export const saveTmdbMovie = tmdbMovieId =>
  (dispatch) => {
    dispatch({ type: FETCH_REQUEST, payload: `saveTmdbMovie ${tmdbMovieId}` });

    saveTmdbMovieRequest(tmdbMovieId)
      .then(response => response.json())
      .then((responseJson) => {
        dispatch({ type: SAVE_TMDB_MOVIE_SUCCESS, payload: responseJson });
        dispatch({ type: FETCH_SUCCESS, payload: `saveTmdbMovie ${tmdbMovieId}` });
      })
      .catch(error => dispatch({ type: FETCH_FAILED, payload: `saveTmdbMovie ${tmdbMovieId}: ${error}` }));
  };

export const deleteTmdbMovie = tmdbMovieId =>
  (dispatch) => {
    dispatch({ type: FETCH_REQUEST, payload: `deleteTmdbMovie ${tmdbMovieId}` });

    deleteTmdbMovieRequest(tmdbMovieId)
      .then(() => {
        dispatch({ type: DELETE_TMDB_MOVIE_SUCCESS, payload: tmdbMovieId });
        dispatch({ type: FETCH_SUCCESS, payload: `deleteTmdbMovie ${tmdbMovieId}` });
      })
      .catch(error => dispatch({ type: FETCH_FAILED, payload: `deleteTmdbMovie ${tmdbMovieId}: ${error}` }));
  };
