import {
  SET_CURRENT_TMDB_MOVIE_DETAILS,
  CLEAR_CURRENT_TMDB_MOVIE_DETAILS,
  SET_MOVIE_STATUS,
} from '../constants/actionTypes';
import {
  SAVED,
  NOT_SAVED,
  UNKNOWN,
} from '../constants/movieStatus';

const initialState = {
  currentTmdbMovieDetails: {},
  currentTmdbMovieStatus: UNKNOWN,
};

const handleSetCurrentTmdbMovie = (state, tmdbMovie) => {
  const status = tmdbMovie.id ? SAVED : NOT_SAVED;
  const newState = {
    currentTmdbMovieDetails: tmdbMovie,
    currentTmdbMovieStatus: status,
  };
  return Object.assign({}, state, newState);
};

export default function tmdbMovieReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TMDB_MOVIE_DETAILS: {
      return handleSetCurrentTmdbMovie(state, action.payload);
    }
    case CLEAR_CURRENT_TMDB_MOVIE_DETAILS: {
      return Object.assign({}, state, initialState);
    }
    case SET_MOVIE_STATUS: {
      return Object.assign({}, state, { currentTmdbMovieStatus: action.payload });
    }
    default:
      return state;
  }
}
