export const AuthActionType = {
    AUTH_LOGIN: "auth/login",
    AUTH_LOGOUT: "auth/logout",
    SET_LOADING: "auth/set-loading",
    SET_ERROR: "auth/set-error",
};

export const authAction = {
    login: (payload) => ({
        type: AuthActionType.AUTH_LOGIN,
        payload,
    }),
    logout: (payload) => ({
        type: AuthActionType.AUTH_LOGOUT,
        payload,
    }),
    setLoading: (loading) => ({
        type: AuthActionType.SET_LOADING,
        payload: { loading },
    }),
    setError: (error) => ({
        type: AuthActionType.SET_ERROR,
        payload: { error },
    }),
};