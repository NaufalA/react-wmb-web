import {AuthActionType} from "../actions/index.js";

const initialState = {
    user: undefined,
    isLoggedIn: false,
    loading: false,
    error: undefined,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionType.AUTH_LOGIN_FULFILLED:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                loading: false,
                error: undefined,
            };
        case AuthActionType.AUTH_VALIDATE_FULFILLED:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: action.payload !== null,
                loading: false,
                error: undefined,
            };
        case AuthActionType.AUTH_LOGOUT_FULFILLED:
            return {
                ...state,
                user: null,
                isLoggedIn: false,
                loading: false,
                error: undefined,
            };
        case AuthActionType.AUTH_LOGIN_REQUESTED:
        case AuthActionType.AUTH_VALIDATE_REQUESTED:
        case AuthActionType.AUTH_LOGOUT_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case AuthActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            };
        case AuthActionType.AUTH_LOGIN_REJECTED:
        case AuthActionType.AUTH_VALIDATE_REJECTED:
        case AuthActionType.AUTH_LOGOUT_REJECTED:
        case AuthActionType.SET_ERROR:
            return {
                ...state,
                user: null,
                isLoggedIn: false,
                error: action.payload.error,
                loading: false,
            };
        default:
            return state;
    }
}
export default authReducer;