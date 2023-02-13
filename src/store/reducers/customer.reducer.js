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
        case CustomerActionType.ADD_CUSTOMER:
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
        case CustomerActionType.GET_CUSTOMER:
            return {
                ...state,
                currentCustomer: action.payload.customer,
                loading: false,
            };
        case CustomerActionType.LIST_CUSTOMER:
            return {
                ...state,
                customerList: action.payload.customerList,
                loading: false,
            };
        case CustomerActionType.UPDATE_CUSTOMER:
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
        case CustomerActionType.REMOVE_CUSTOMER:
            return {
                ...state,
                customerList:  {
                    ...state.customerList,
                    data: state.customerList.data.filter((c) => c.id !== action.payload.id)
                },
                loading: false,
            };
        case CustomerActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            };
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
