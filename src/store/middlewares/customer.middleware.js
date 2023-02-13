import services from "../../services";
import {customerAction} from "../actions/index.js";

const customerMiddleware = {
    addCustomer: (dto) => async (dispatch) => {
        try {
            dispatch(customerAction.setLoading(true));
            const newCustomer = await services.customer.addCustomer(dto);
            dispatch(customerAction.addCustomer(newCustomer));
            return newCustomer;
        } catch (error) {
            dispatch(customerAction.setError(error));
            throw error;
        }
    },
    getCustomer: (id) => async (dispatch) => {
        try {
            dispatch(customerAction.setLoading(true));
            const customer = await services.customer.getCustomer(id);
            dispatch(customerAction.getCustomer(customer));
            return customer;
        } catch (error) {
            dispatch(customerAction.setError(error));
            throw error;
        }
    },
    listCustomer: (page, size) => async (dispatch) => {
        try {
            dispatch(customerAction.setLoading(true));
            const customers = await services.customer.listCustomer(page, size);
            dispatch(customerAction.listCustomer(customers));
            return customers;
        } catch (error) {
            dispatch(customerAction.setError(error));
            throw error;
        }
    },
    updateCustomer: (id, updatedCustomer) => async (dispatch) => {
        try {
            dispatch(customerAction.setLoading(true));
            const customer = await services.customer.updateCustomer(id, updatedCustomer);
            dispatch(customerAction.updateCustomer(customer));
            return customer;
        } catch (error) {
            dispatch(customerAction.setError(error));
            throw error;
        }
    },
    removeCustomer: (id) => async (dispatch) => {
        try {
            dispatch(customerAction.setLoading(true));
            const removedId = await services.customer.removeCustomer(id);
            dispatch(customerAction.removeCustomer(removedId));
            return removedId;
        } catch (error) {
            dispatch(customerAction.setError(error));
            throw error;
        }
    },
};

export default customerMiddleware;
