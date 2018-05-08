import Immutable from 'immutable';
import {
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIE_SUCCESS,
  SAVE_TMDB_MOVIE_SUCCESS,
  DELETE_TMDB_MOVIE_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  moviesById: Immutable.Map(),
};

const handleLoadMovies = (state, movieList) => {
  const movieMap = movieList.reduce(
    (map, movie) => map.set(movie.id, movie),
    Immutable.Map(),
  );
  return Object.assign({}, state, { moviesById: movieMap });
};

const addMovieToMap = (state, movie) => {
  const movieMap = state.moviesById.set(movie.id, movie);
  return Object.assign({}, state, { moviesById: movieMap });
};

const removeMovieToMap = (state, tmdbId) => {
  const movie = state.moviesById.find(value => value.tmdbId === tmdbId);
  const movieMap = state.moviesById.delete(movie.id);
  return Object.assign({}, state, { moviesById: movieMap });
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES_SUCCESS: {
      return handleLoadMovies(state, action.payload);
    }
    case LOAD_MOVIE_SUCCESS: {
      return addMovieToMap(state, action.payload);
    }
    case SAVE_TMDB_MOVIE_SUCCESS: {
      return addMovieToMap(state, action.payload);
    }
    case DELETE_TMDB_MOVIE_SUCCESS: {
      return removeMovieToMap(state, action.payload);
    }
    default:
      return state;
  }
}
