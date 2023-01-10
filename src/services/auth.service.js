import {ACCESS_TOKEN_KEY} from "../shared/constants/storageKey.js";
import {ErrorResponse} from "../shared/dtos/index.js";

export default function authService(http, storage) {
    const baseURI = "auth";

    const login = async ({email, password}) => {
        try {
            const data = {
                email,
                password,
            };
            const res = await http.post(`${baseURI}/login`, data);
            console.log(res);

            const token = res.data.data.accessToken;

            storage.setItem(ACCESS_TOKEN_KEY, token);

            return JSON.parse(window.atob(token.split(".")[1]));
        } catch (error) {
            throw new ErrorResponse(
                error.response.data?.code || error.response.status,
                error.response.data?.message || error.message,
                error.response.data?.reason || error.message
            );
        }
    };

    const validate = async () => {
        try {
            const accessToken = storage.getItem(ACCESS_TOKEN_KEY);
            if (!accessToken) return null;

            await http.post(`${baseURI}/validate`, {accessToken});

            return JSON.parse(window.atob(accessToken.split(".")[1]));
        } catch (error) {
            throw new ErrorResponse(
                error.response.data?.code || error.response.status,
                error.response.data?.message || error.message,
                error.response.data?.reason || error.message
            );
        }
    };

    const logout = async () => {
        try {
            storage.removeItem(ACCESS_TOKEN_KEY);

            return true;
        } catch (error) {
            throw error;
        }
    };

    return {login, validate, logout};
}
