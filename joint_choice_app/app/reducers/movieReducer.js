import Immutable from 'immutable';
import {
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIE_SUCCESS,
  SET_CURRENT_MOVIE_DETAILS,
} from '../constants/actionTypes';

const initialState = {
  moviesById: Immutable.Map(),
  foundMovieList: Immutable.List(),
  currentMovieDetails: {},
};

const handleLoadMovies = (state, movieList) => {
  const movieMap = movieList.reduce(
    (map, movie) => map.set(movie.id, movie),
    Immutable.Map(),
  );
  return Object.assign({}, state, { moviesById: movieMap });
};

const handleLoadMovie = (state, movie) => {
  const movieMap = state.moviesById.set(movie.id, movie);
  return Object.assign({}, state, { moviesById: movieMap });
};

const handleSetCurrentMovieDetails = (state, movieId) => {
  const movie = state.moviesById.get(movieId);
  return Object.assign({}, state, { currentMovieDetails: movie });
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES_SUCCESS: {
      return handleLoadMovies(state, action.payload);
    }
    case LOAD_MOVIE_SUCCESS: {
      return handleLoadMovie(state, action.payload);
    }
    case SET_CURRENT_MOVIE_DETAILS: {
      return handleSetCurrentMovieDetails(state, action.payload);
    }
    default:
      return state;
  }
}
