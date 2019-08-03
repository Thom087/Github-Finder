import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state, //current state
                users: action.payload,
                loading: false,
                showClear: true
            }
        case SET_LOADING:
            return {
                ...state, // copies the whole state
                loading: true,
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                showClear: false
            }
        default:
            return state;
    }
}