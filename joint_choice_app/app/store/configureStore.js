import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import loggingMiddleware from './middleware/loggingMiddleware';

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    loggingMiddleware,
  ),
);


export default configureStore;
