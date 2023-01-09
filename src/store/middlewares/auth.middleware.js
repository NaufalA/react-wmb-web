import {authAction} from "../actions/index.js";
import services from "../../services/index.js";

const authMiddleware = {
    login: ({ email, password }) => async (dispatch) => {
        try {
            dispatch(authAction.setLoading(true));
            const res = await services.auth.login({ email, password });
            dispatch(authAction.login(res));
            return {fulfilled: res};
        } catch (error) {
            dispatch(authAction.setError(error));
            return {rejected: error};
        }
    },
    logout: () => async (dispatch) => {
        try {
            dispatch(authAction.setLoading(true));
            const res = await services.auth.logout();
            dispatch(authAction.logout(res));
            return {fulfilled: res};
        } catch (error) {
            dispatch(authAction.setError(error));
            return {rejected: error};
        }
    }
}

export default authMiddleware;