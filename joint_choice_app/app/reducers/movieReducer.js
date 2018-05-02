import Immutable from 'immutable';
import { LOAD_MOVIES_SUCCESS } from '../constants/actionTypes';

const initialState = { moviesById: Immutable.Map() };

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES_SUCCESS: {
      const movieMap = action.payload.reduce(
        (map, movie) => map.set(movie.id, movie),
        Immutable.Map(),
      );
      return Object.assign({}, state, { moviesById: movieMap });
    }
    default:
      return state;
  }
}
