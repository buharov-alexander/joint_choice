import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import movieSearchReducer from './movieSearchReducer';
import uiReducer from './uiReducer';
import tmdbMovieReducer from './tmdbMovieReducer';

export default combineReducers({
  movie: movieReducer,
  search: movieSearchReducer,
  ui: uiReducer,
  tmdb: tmdbMovieReducer,
});
