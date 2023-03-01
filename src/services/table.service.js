import {ErrorResponse} from "../shared/dtos/index.js";

export default function tableService(http) {
    const baseURI = "tables";

    const addTable = async (dto) => {
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

    const getTable = async (id) => {
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

    const listTable = async (page, size) => {
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

    const updateTable = async ({id, updatedTable}) => {
        try {
            const res = await http.put(`${baseURI}/${id}`, updatedTable);
            return res.data.data;
        } catch (error) {
            throw new ErrorResponse(
                error.response.data.code || error.response.status,
                error.response.data.message || error.message,
                error.response.data.reason || error.message
            );
        }
    };

    const removeTable = async (id) => {
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

    return {addTable, listTable, getTable, updateTable, removeTable};
}