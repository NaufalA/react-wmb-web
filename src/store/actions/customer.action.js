import {createAsyncActionTypes} from "../utils/actionUtility.js";

export const CustomerActionType = {
    ...createAsyncActionTypes("ADD_CUSTOMER", "customer/add"),
    ...createAsyncActionTypes("GET_CUSTOMER", "customer/get"),
    ...createAsyncActionTypes("LIST_CUSTOMER", "customer/list"),
    ...createAsyncActionTypes("UPDATE_CUSTOMER", "customer/update"),
    ...createAsyncActionTypes("REMOVE_CUSTOMER", "customer/remove"),
    SET_LOADING: "customer/set-loading",
    SET_ERROR: "customer/set-error"
};

export const customerAction = {
    addCustomer: {
        requested: (dto) => ({
            type: CustomerActionType.ADD_CUSTOMER_REQUESTED,
            payload: {dto}
        }),
        fulfilled: (newCustomer) => ({
            type: CustomerActionType.ADD_CUSTOMER_FULFILLED,
            payload: {newCustomer},
        }),
        rejected: (error) => ({
            type: CustomerActionType.ADD_CUSTOMER_REJECTED,
            payload: {error}
        })
    },
    getCustomer: {
        requested: (id) => ({
            type: CustomerActionType.GET_CUSTOMER_REQUESTED,
            payload: {id}
        }),
        fulfilled: (customer) => ({
            type: CustomerActionType.GET_CUSTOMER_FULFILLED,
            payload: {customer},
        }),
        rejected: (error) => ({
            type: CustomerActionType.GET_CUSTOMER_REJECTED,
            payload: {error}
        })
    },
    listCustomer: {
        requested: (page, size) => ({
            type: CustomerActionType.LIST_CUSTOMER_REQUESTED,
            payload: {page, size}
        }),
        fulfilled: (customerList) => ({
            type: CustomerActionType.LIST_CUSTOMER_FULFILLED,
            payload: {customerList},
        }),
        rejected: (error) => ({
            type: CustomerActionType.LIST_CUSTOMER_REJECTED,
            payload: {error}
        })
    },
    updateCustomer: {
        requested: (id, updatedCustomer) => ({
            type: CustomerActionType.UPDATE_CUSTOMER_REQUESTED,
            payload: {id, updatedCustomer}
        }),
        fulfilled: (updatedCustomer) => ({
            type: CustomerActionType.UPDATE_CUSTOMER_FULFILLED,
            payload: {updatedCustomer},
        }),
        rejected: (error) => ({
            type: CustomerActionType.UPDATE_CUSTOMER_REJECTED,
            payload: {error}
        })
    },
    removeCustomer: {
        requested: (id) => ({
            type: CustomerActionType.REMOVE_CUSTOMER_REQUESTED,
            payload: {id}
        }),
        fulfilled: (id) => ({
            type: CustomerActionType.REMOVE_CUSTOMER_FULFILLED,
            payload: {id},
        }),
        rejected: (error) => ({
            type: CustomerActionType.REMOVE_CUSTOMER_REJECTED,
            payload: {error}
        })
    },
    setLoading: (loading) => ({
        type: CustomerActionType.SET_LOADING,
        payload: {loading}
    }),
    setError: (error) => ({
        type: CustomerActionType.SET_ERROR,
        payload: {error}
    })
};
