import { fetchMovies } from '../server/movie';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
  LOAD_MOVIES_SUCCESS,
} from '../constants/actionTypes';

export const loadMovies = () =>
  (dispatch) => {
    dispatch({ type: FETCH_REQUEST });

    fetchMovies()
      .then(response => response.json())
      .then((responseJson) => {
        dispatch({ type: LOAD_MOVIES_SUCCESS, payload: responseJson });
        dispatch({ type: FETCH_SUCCESS });
      })
      .catch(error => dispatch({ type: FETCH_FAILED, payload: error }));
  };

export const searchMovies = () =>
  dispatch => dispatch({ type: FETCH_REQUEST });
