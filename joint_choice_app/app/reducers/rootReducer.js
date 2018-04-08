import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import uiReducer from './uiReducer';

export default combineReducers({
    movie: movieReducer,
    ui: uiReducer
});