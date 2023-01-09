import {TransactionActionType} from "../actions/index.js";

const initialState = {
    currentTransaction: null,
    transactionList: {
        data: [],
        page: 0,
        size: 5,
        count: 0,
        totalPages: 0,
        totalCount: 0,
    },
    loading: false,
    error: undefined,
};

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case TransactionActionType.ADD_TRANSACTION:
            const updatedData = [ ...state.transactionList.data ];
            updatedData.push(action.payload.newTransaction);
            return {
                ...state,
                currentTransaction: action.payload.newTransaction,
                transactionList: {
                    ...state.transactionList,
                    data: updatedData
                },
                loading: false,
            };
        case TransactionActionType.GET_TRANSACTION:
            return {
                ...state,
                currentTransaction: action.payload.transaction,
                loading: false,
            };
        case TransactionActionType.LIST_TRANSACTION:
            return {
                ...state,
                transactionList: action.payload.transactionList,
                loading: false,
            };
        case TransactionActionType.UPDATE_TRANSACTION:
            const updatedTransactions = [...state.transactionList.data];
            const updatedIndex = updatedTransactions.findIndex(t => t.id === action.payload.updatedTransaction.id);
            updatedTransactions[updatedIndex] = action.payload.updatedTransaction;

            return {
                ...state,
                currentTransaction: action.payload.transaction,
                transactionList: {
                    ...state.transactionList,
                    data: updatedTransactions
                },
                loading: false,
            };
        case TransactionActionType.REMOVE_TRANSACTION:
            return {
                ...state,
                transactionList:  {
                    ...state.transactionList,
                    data: state.transactionList.data.filter((c) => c.id !== action.payload.id)
                },
                loading: false,
            };
        case TransactionActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            };
        case TransactionActionType.SET_ERROR:
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
        default:
            return state;
    }
};

export default transactionReducer;
