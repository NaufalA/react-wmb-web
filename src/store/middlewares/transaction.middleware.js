import services from "../../services";
import {transactionAction} from "../actions/index.js";

const transactionMiddleware = {
    addTransaction: (dto) => async (dispatch) => {
        try {
            dispatch(transactionAction.setLoading(true));
            const newTransaction = await services.transaction.addTransaction(dto);
            dispatch(transactionAction.addTransaction(newTransaction));
            return newTransaction;
        } catch (error) {
            dispatch(transactionAction.setError(error));
            throw error;
        }
    },
    getTransaction: (id) => async (dispatch) => {
        try {
            dispatch(transactionAction.setLoading(true));
            const transaction = await services.transaction.getTransaction(id);
            dispatch(transactionAction.getTransaction(transaction));
            return transaction;
        } catch (error) {
            dispatch(transactionAction.setError(error));
            throw error;
        }
    },
    listTransaction: (page, size) => async (dispatch) => {
        try {
            dispatch(transactionAction.setLoading(true));
            const transactions = await services.transaction.listTransaction(page, size);
            dispatch(transactionAction.listTransaction(transactions));
            return transactions;
        } catch (error) {
            dispatch(transactionAction.setError(error));
            throw error;
        }
    },
    updateTransaction: (id, updatedTransaction) => async (dispatch) => {
        try {
            dispatch(transactionAction.setLoading(true));
            const transaction = await services.transaction.updateTransaction(id, updatedTransaction);
            dispatch(transactionAction.updateTransaction(transaction));
            return transaction;
        } catch (error) {
            dispatch(transactionAction.setError(error));
            throw error;
        }
    },
    removeTransaction: (id) => async (dispatch) => {
        try {
            dispatch(transactionAction.setLoading(true));
            const removedId = await services.transaction.removeTransaction(id);
            dispatch(transactionAction.removeTransaction(removedId));
            return removedId;
        } catch (error) {
            dispatch(transactionAction.setError(error));
            throw error;
        }
    },
};

export default transactionMiddleware;
