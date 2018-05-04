import Immutable from 'immutable';
import {
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_QUERY,
  TYPPING_TIMEOUT,
} from '../constants/actionTypes';

const initialState = {
  foundMovieList: Immutable.List(),
  tappingTimeout: 0,
  searchMovieQuery: '',
};

const handleSearchMovies = (state, list) => {
  const foundMovies = Immutable.List(list);
  return Object.assign({}, state, { foundMovieList: foundMovies });
};

export default function movieSearchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE_SUCCESS: {
      return handleSearchMovies(state, action.payload);
    }
    case SEARCH_MOVIE_QUERY: {
      return Object.assign({}, state, { searchMovieQuery: action.payload });
    }
    case TYPPING_TIMEOUT: {
      return Object.assign({}, state, { tappingTimeout: action.payload });
    }
    default:
      return state;
  }
}
