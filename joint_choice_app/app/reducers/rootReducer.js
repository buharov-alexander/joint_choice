import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import movieSearchReducer from './movieSearchReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  movie: movieReducer,
  search: movieSearchReducer,
  ui: uiReducer,
});
