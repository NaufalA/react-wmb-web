import {ErrorResponse} from "../shared/dtos/index.js";

export default function transactionService(http) {
    const baseURI = "transactions";

    const addTransaction = async (dto) => {
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

    const getTransaction = async (id) => {
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

    const listTransaction = async (page, size) => {
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

    const updateTransaction = async (id, updatedTransaction) => {
        return null;
    };

    const removeTransaction = async (id) => {
        return null;
    }

    return {addTransaction, listTransaction, getTransaction, updateTransaction, removeTransaction};
}
