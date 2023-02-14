import {createAsyncActionTypes} from "../utils/actionUtility.js";

export const AuthActionType = {
    ...createAsyncActionTypes("AUTH_LOGIN", "auth/login"),
    ...createAsyncActionTypes("AUTH_VALIDATE", "auth/validate"),
    ...createAsyncActionTypes("AUTH_LOGOUT", "auth/logout"),
    SET_LOADING: "auth/set-loading",
    SET_ERROR: "auth/set-error",
};

export const authAction = {
    login: {
        requested: ({email, password}) => ({
            type: AuthActionType.AUTH_LOGIN_REQUESTED,
            payload: {email, password}
        }),
        fulfilled: (payload) => ({
            type: AuthActionType.AUTH_LOGIN_FULFILLED,
            payload,
        }),
        rejected: (error) => ({
            type: AuthActionType.AUTH_LOGIN_REJECTED,
            payload: {error},
        }),
    },
    validate: {
        requested: () => ({
            type: AuthActionType.AUTH_VALIDATE_REQUESTED,
        }),
        fulfilled: (payload) => ({
            type: AuthActionType.AUTH_VALIDATE_FULFILLED,
            payload,
        }),
        rejected: (error) => ({
            type: AuthActionType.AUTH_VALIDATE_REJECTED,
            payload: {error},
        }),
    },
    logout: {
        requested: () => ({
            type: AuthActionType.AUTH_LOGOUT_REQUESTED,
        }),
        fulfilled: (payload) => ({
            type: AuthActionType.AUTH_LOGOUT_FULFILLED,
            payload,
        }),
        rejected: (error) => ({
            type: AuthActionType.AUTH_LOGOUT_REJECTED,
            payload: {error},
        }),
    },
    setLoading: (loading) => ({
        type: AuthActionType.SET_LOADING,
        payload: {loading},
    }),
    setError: (error) => ({
        type: AuthActionType.SET_ERROR,
        payload: {error},
    }),
};