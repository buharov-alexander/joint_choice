import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILED
} from '../constants/actionTypes';

const initialState = { isLoading: false };

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_REQUEST:
            return Object.assign({}, state, { isLoading: true });
        case FETCH_SUCCESS:
            return Object.assign({}, state, { isLoading: false });
        default:
            return state;
    }
    return state;
}