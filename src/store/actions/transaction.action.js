import {createAsyncActionTypes} from "../utils/actionUtility.js";

export const TransactionActionType = {
    ...createAsyncActionTypes("ADD_TRANSACTION", "transaction/add"),
    ...createAsyncActionTypes("GET_TRANSACTION", "transaction/get"),
    ...createAsyncActionTypes("LIST_TRANSACTION", "transaction/list"),
    ...createAsyncActionTypes("UPDATE_TRANSACTION", "transaction/update"),
    ...createAsyncActionTypes("REMOVE_TRANSACTION", "transaction/remove"),
    SET_LOADING: "transaction/set-loading",
    SET_ERROR: "transaction/set-error",
};

export const transactionAction = {
    addTransaction: {
        requested: (dto) => ({
            type: TransactionActionType.ADD_TRANSACTION_REQUESTED,
            payload: {dto}
        }),
        fulfilled: (newTransaction) => ({
            type: TransactionActionType.ADD_TRANSACTION_FULFILLED,
            payload: {newTransaction},
        }),
        rejected: (error) => ({
            type: TransactionActionType.ADD_TRANSACTION_REJECTED,
            payload: {error}
        })
    },
    getTransaction: {
        requested: (id) => ({
            type: TransactionActionType.GET_TRANSACTION_REQUESTED,
            payload: {id}
        }),
        fulfilled: (transaction) => ({
            type: TransactionActionType.GET_TRANSACTION_FULFILLED,
            payload: {transaction},
        }),
        rejected: (error) => ({
            type: TransactionActionType.GET_TRANSACTION_REJECTED,
            payload: {error}
        })
    },
    listTransaction: {
        requested: (page, size) => ({
            type: TransactionActionType.LIST_TRANSACTION_REQUESTED,
            payload: {page, size}
        }),
        fulfilled: (transactionList) => ({
            type: TransactionActionType.LIST_TRANSACTION_FULFILLED,
            payload: {transactionList},
        }),
        rejected: (error) => ({
            type: TransactionActionType.LIST_TRANSACTION_REJECTED,
            payload: {error}
        })
    },
    updateTransaction: {
        requested: (id, updatedTransaction) => ({
            type: TransactionActionType.UPDATE_TRANSACTION_REQUESTED,
            payload: {id, updatedTransaction}
        }),
        fulfilled: (updatedTransaction) => ({
            type: TransactionActionType.UPDATE_TRANSACTION_FULFILLED,
            payload: {updatedTransaction},
        }),
        rejected: (error) => ({
            type: TransactionActionType.UPDATE_TRANSACTION_REJECTED,
            payload: {error}
        })
    },
    removeTransaction: {
        requested: (id) => ({
            type: TransactionActionType.REMOVE_TRANSACTION_REQUESTED,
            payload: {id}
        }),
        fulfilled: (id) => ({
            type: TransactionActionType.REMOVE_TRANSACTION_FULFILLED,
            payload: {id},
        }),
        rejected: (error) => ({
            type: TransactionActionType.REMOVE_TRANSACTION_REJECTED,
            payload: {error}
        })
    },
    setLoading: (loading) => ({
        type: TransactionActionType.SET_LOADING,
        payload: {loading}
    }),
    setError: (error) => ({
        type: TransactionActionType.SET_ERROR,
        payload: {error}
    }),
    setCurrentTransaction: (currentTransaction) => ({
        type: TransactionActionType.SET_CURRENT_TRANSACTION,
        payload: {currentTransaction}
    })
};
