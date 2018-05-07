import {
  SET_CURRENT_TMDB_MOVIE_DETAILS,
  CLEAR_CURRENT_TMDB_MOVIE_DETAILS,
} from '../constants/actionTypes';

const initialState = {
  currentTmdbMovieDetails: {},
};

export default function tmdbMovieReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TMDB_MOVIE_DETAILS: {
      return Object.assign({}, state, { currentTmdbMovieDetails: action.payload });
    }
    case CLEAR_CURRENT_TMDB_MOVIE_DETAILS: {
      return Object.assign({}, state, { currentTmdbMovieDetails: {} });
    }
    default:
      return state;
  }
}
