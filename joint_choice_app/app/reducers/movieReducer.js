import {
    LOAD_MOVIES_SUCCESS
} from '../constants/actionTypes';
import Immutable from 'immutable';


const initialState = {moviesById: Immutable.Map()};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_MOVIES_SUCCESS:
            const moviesById = action.payload.reduce((map, movie) => {
                return map.set(movie.id, movie);
            }, Immutable.Map());
            return Object.assign({}, state, { moviesById: moviesById });
        default:
            return state;
    }
}