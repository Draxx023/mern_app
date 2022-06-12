import * as actionType from './types';

const initialState = { isLoggedIn: false, user: null };

// reducer
export default function rootReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case actionType.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            };
        case actionType.REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false
            };
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true, // in case of success login
                user: payload.user // to access user data
            };
        case actionType.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        case actionType.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        case actionType.CREATE_SUCCESS:
            return {
                ...state
            }
        case actionType.CREATE_FAIL:
            return {
                ...state
            }
        case actionType.SHOW_SUCCESS:
            return {
                ...state
            }
        case actionType.SHOW_FAIL:
            return {
                ...state
            }
        case actionType.GET_INFO_SUCCESS:
            return {
                ...state
            }
        case actionType.GET_INFO_FAIL:
            return {
                ...state
            }
        case actionType.DELETE_SUCCESS:
            return {
                ...state
            }
        case actionType.DELETE_FAIL:
            return {
                ...state
            }
        default:
            return state;
    }
} 
