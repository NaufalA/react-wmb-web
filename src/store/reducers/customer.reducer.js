import {CustomerActionType} from "../actions/index.js";

const initialState = {
    currentCustomer: null,
    customerList: {
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

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CustomerActionType.ADD_CUSTOMER_FULFILLED:
            const updatedData = [ ...state.customerList.data ];
            updatedData.push(action.payload.newCustomer);
            return {
                ...state,
                currentCustomer: action.payload.newCustomer,
                customerList: {
                    ...state.customerList,
                    data: updatedData
                },
                loading: false,
            };
        case CustomerActionType.GET_CUSTOMER_FULFILLED:
            return {
                ...state,
                currentCustomer: action.payload.customer,
                loading: false,
            };
        case CustomerActionType.LIST_CUSTOMER_FULFILLED:
            return {
                ...state,
                customerList: action.payload.customerList,
                loading: false,
            };
        case CustomerActionType.UPDATE_CUSTOMER_FULFILLED:
            const updatedCustomers = [...state.customerList.data];
            const updatedIndex = updatedCustomers.findIndex(t => t.id === action.payload.updatedCustomer.id);
            updatedCustomers[updatedIndex] = action.payload.updatedCustomer;

            return {
                ...state,
                currentCustomer: action.payload.customer,
                customerList: {
                    ...state.customerList,
                    data: updatedCustomers
                },
                loading: false,
            };
        case CustomerActionType.REMOVE_CUSTOMER_FULFILLED:
            return {
                ...state,
                customerList:  {
                    ...state.customerList,
                    data: state.customerList.data.filter((c) => c.id !== action.payload.id)
                },
                loading: false,
            };
        case CustomerActionType.CUSTOMER_ADD_REQUESTED:
        case CustomerActionType.CUSTOMER_GET_REQUESTED:
        case CustomerActionType.CUSTOMER_LIST_REQUESTED:
        case CustomerActionType.CUSTOMER_UPDATE_REQUESTED:
        case CustomerActionType.CUSTOMER_REMOVE_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case CustomerActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            };
        case CustomerActionType.CUSTOMER_ADD_REJECTED:
        case CustomerActionType.CUSTOMER_GET_REJECTED:
        case CustomerActionType.CUSTOMER_LIST_REJECTED:
        case CustomerActionType.CUSTOMER_UPDATE_REJECTED:
        case CustomerActionType.CUSTOMER_REMOVE_REJECTED:
        case CustomerActionType.SET_ERROR:
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
        default:
            return state;
    }
};

export default customerReducer;
