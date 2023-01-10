import axios from "axios";
import {ACCESS_TOKEN_KEY} from "../constants/storageKey.js";

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`
    }
});

export default httpClient;
