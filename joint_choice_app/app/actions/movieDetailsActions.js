import { getMovieDetails } from '../server/movieDetailsApi';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
  SET_CURRENT_TMDB_MOVIE_DETAILS,
} from '../constants/actionTypes';

export const setCurrentTmdbMovieDetails = tmdbMovieId =>
  (dispatch) => {
    dispatch({ type: FETCH_REQUEST, payload: `getMovieDetails ${tmdbMovieId}` });
    getMovieDetails(tmdbMovieId)
      .then(response => response.json())
      .then((foundMovie) => {
        dispatch({ type: SET_CURRENT_TMDB_MOVIE_DETAILS, payload: foundMovie });
        dispatch({ type: FETCH_SUCCESS, payload: `getMovieDetails ${tmdbMovieId}` });
      })
      .catch(error => dispatch({ type: FETCH_FAILED, payload: `getMovieDetails ${tmdbMovieId}: ${error}` }));
  };
