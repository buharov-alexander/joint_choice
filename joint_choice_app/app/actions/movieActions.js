import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILED,
    LOAD_MOVIES_SUCCESS
} from '../constants/actionTypes';

export const loadMovies = () => {
    return dispatch => {
        dispatch({ type: FETCH_REQUEST });

        fetch('http://192.168.1.100:8090/jointchoice/movie')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: LOAD_MOVIES_SUCCESS, payload: responseJson });
                dispatch({ type: FETCH_SUCCESS });
            })
            .catch((error) => {
                dispatch({ type: FETCH_FAILED });
            });
    }
}