import {ErrorResponse} from "../shared/dtos/index.js";

export default function menuService(http) {
    const baseURI = "menus";

    const addMenu = async (dto) => {
        try {
            const res = await http.post(`${baseURI}`, dto);
            return res.data.data;
        } catch (error) {
            throw new ErrorResponse(
                error.response.data.code || error.response.status,
                error.response.data.message || error.message,
                error.response.data.reason || error.message
            );
        }
    };

    const getMenu = async (id) => {
        try {
            const res = await http.get(`${baseURI}/${id}`);
            return res.data.data;
        } catch (error) {
            console.log(error);
            throw new ErrorResponse(
                error.response.data.code || error.response.status,
                error.response.data.message || error.message,
                error.response.data.reason || error.message
            );
        }
    }

    const listMenu = async (page, size) => {
        try {
            const res = await http.get(`${baseURI}?page=${page}&size=${size}`);
            return res.data.data;
        } catch (error) {
            console.log(error);
            throw new ErrorResponse(
                error.response.data.code || error.response.status,
                error.response.data.message || error.message,
                error.response.data.reason || error.message
            );
        }
    };

    const listMenuByCategory = async (categoryId) => {
        try {
            const res = await http.get(`${baseURI}?page=${0}&size=${0}&categoryId=${categoryId}`);
            return res.data.data;
        } catch (error) {
            console.log(error);
            throw new ErrorResponse(
                error.response.data.code || error.response.status,
                error.response.data.message || error.message,
                error.response.data.reason || error.message
            );
        }
    };

    const removeMenu = async (id) => {
        try {
            const res = await http.delete(`${baseURI}/${id}`);
            return res.data.data;
        } catch (error) {
            throw new ErrorResponse(
                error.response.data.code || error.response.status,
                error.response.data.message || error.message,
                error.response.data.reason || error.message
            );
        }
    }

    const listCategory = async () => {
        try {
            const res = await http.get(`${baseURI}/categories`);
            return res.data.data;
        } catch (error) {
            console.log(error);
            throw new ErrorResponse(
                error.response.data.code || error.response.status,
                error.response.data.message || error.message,
                error.response.data.reason || error.message
            );
        }
    }

    return {addMenu, getMenu, listMenu, listMenuByCategory, removeMenu, listCategory};
}