import {ErrorResponse} from "../shared/dtos/index.js";

export default function customerService(http) {
    const baseURI = "customers";

    const addCustomer = async (dto) => {
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

    const getCustomer = async (id) => {
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

    const listCustomer = async (page, size) => {
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

    const updateCustomer = async ({id, updatedCustomer}) => {
        try {
            const res = await http.put(`${baseURI}/${id}`, updatedCustomer);
            return res.data.data;
        } catch (error) {
            throw new ErrorResponse(
                error.response.data.code || error.response.status,
                error.response.data.message || error.message,
                error.response.data.reason || error.message
            );
        }
    };

    const removeCustomer = async (id) => {
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

    return {addCustomer, listCustomer, getCustomer, updateCustomer, removeCustomer};
}