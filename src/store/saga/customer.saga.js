import {call, put, takeLatest, takeLeading} from "redux-saga/effects";
import {customerAction, CustomerActionType} from "../actions/index.js";
import services from "../../services/index.js";

function* addCustomer(action) {
    const {dto} = action.payload;
    try {
        const newCustomer = yield call(services.customer.addCustomer, dto);
        yield put(customerAction.addCustomer.fulfilled(newCustomer));
    } catch (error) {
        yield put(customerAction.addCustomer.rejected(error));
    }
}

function* getCustomer(action) {
    const {id} = action.payload;
    try {
        const customer = yield call(services.customer.getCustomer, id);
        yield put(customerAction.getCustomer.fulfilled(customer));
    } catch (error) {
        yield put(customerAction.getCustomer.rejected(error));
    }
}

function* listCustomer(action) {
    const {page, size} = action.payload;
    try {
        const customers = yield call(services.customer.listCustomer, page, size);
        yield put(customerAction.listCustomer.fulfilled(customers));
    } catch (error) {
        yield put(customerAction.listCustomer.rejected(error));
    }
}

function* updateCustomer(action) {
    const {id, updatedCustomer} = action.payload;
    try {
        yield put(customerAction.setLoading(true));
        const customer = yield call(services.customer.updateCustomer, id, updatedCustomer);
        yield put(customerAction.updateCustomer.fulfilled(customer));
    } catch (error) {
        yield put(customerAction.updateCustomer.rejected(error));
    }
}

function* removeCustomer(action) {
    const {id} = action.payload;
    try {
        yield put(customerAction.setLoading(true));
        const removedId = yield call(services.customer.removeCustomer, id);
        yield put(customerAction.removeCustomer.fulfilled(removedId));
    } catch (error) {
        yield put(customerAction.removeCustomer.rejected(error));
    }
}

export default function* customerSaga() {
    yield takeLatest(CustomerActionType.ADD_CUSTOMER_REQUESTED, addCustomer);
    yield takeLeading(CustomerActionType.GET_CUSTOMER_REQUESTED, getCustomer);
    yield takeLatest(CustomerActionType.LIST_CUSTOMER_REQUESTED, listCustomer);
    yield takeLatest(CustomerActionType.UPDATE_CUSTOMER_REQUESTED, updateCustomer);
    yield takeLatest(CustomerActionType.REMOVE_CUSTOMER_REQUESTED, removeCustomer);
}
