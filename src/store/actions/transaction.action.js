export const TransactionActionType = {
    ADD_TRANSACTION: "transaction/add",
    GET_TRANSACTION: "transaction/get",
    LIST_TRANSACTION: "transaction/list",
    UPDATE_TRANSACTION: "transaction/update",
    REMOVE_TRANSACTION: "transaction/remove",
    SET_LOADING: "transaction/set-loading",
    SET_ERROR: "transaction/set-error"
};

export const transactionAction = {
    addTransaction: (newTransaction) => ({
        type: TransactionActionType.ADD_TRANSACTION,
        payload: { newTransaction },
    }),
    getTransaction: (transaction) => ({
        type: TransactionActionType.GET_TRANSACTION,
        payload: { transaction },
    }),
    listTransaction: (transactionList) => ({
        type: TransactionActionType.LIST_TRANSACTION,
        payload: { transactionList },
    }),
    updateTransaction: (updatedTransaction) => ({
        type: TransactionActionType.UPDATE_TRANSACTION,
        payload: { updatedTransaction },
    }),
    removeTransaction: (id) => ({
        type: TransactionActionType.REMOVE_TRANSACTION,
        payload: { id },
    }),
    setLoading: (loading) => ({
        type: TransactionActionType.SET_LOADING,
        payload: { loading }
    }),
    setError: (error) => ({
        type: TransactionActionType.SET_ERROR,
        payload: { error }
    })
};