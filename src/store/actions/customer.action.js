export const CustomerActionType = {
    ADD_CUSTOMER: "customer/add",
    GET_CUSTOMER: "customer/get",
    LIST_CUSTOMER: "customer/list",
    UPDATE_CUSTOMER: "customer/update",
    REMOVE_CUSTOMER: "customer/remove",
    SET_LOADING: "customer/set-loading",
    SET_ERROR: "customer/set-error"
};

export const customerAction = {
    addCustomer: (newCustomer) => ({
        type: CustomerActionType.ADD_CUSTOMER,
        payload: { newCustomer },
    }),
    getCustomer: (customer) => ({
        type: CustomerActionType.GET_CUSTOMER,
        payload: { customer },
    }),
    listCustomer: (customerList) => ({
        type: CustomerActionType.LIST_CUSTOMER,
        payload: { customerList },
    }),
    updateCustomer: (updatedCustomer) => ({
        type: CustomerActionType.UPDATE_CUSTOMER,
        payload: { updatedCustomer },
    }),
    removeCustomer: (id) => ({
        type: CustomerActionType.REMOVE_CUSTOMER,
        payload: { id },
    }),
    setLoading: (loading) => ({
        type: CustomerActionType.SET_LOADING,
        payload: { loading }
    }),
    setError: (error) => ({
        type: CustomerActionType.SET_ERROR,
        payload: { error }
    })
};