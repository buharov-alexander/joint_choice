import {
    LOAD_MOVIES_SUCCESS
} from '../constants/actionTypes';

const initialState = {moviesById: new Map()};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_MOVIES_SUCCESS:
            const map = new Map();
            action.payload.forEach(movie => {
                map.set(movie.id, movie);
            });
            return Object.assign({}, state, { moviesById: map });
        default:
            return state;
    }
}