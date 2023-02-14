import {call, put, takeLatest, takeLeading} from "redux-saga/effects";
import {transactionAction, TransactionActionType} from "../actions/index.js";
import services from "../../services/index.js";

function* addTransaction(action) {
    const {dto} = action.payload;
    try {
        const newTransaction = yield call(services.transaction.addTransaction, dto);
        yield put(transactionAction.addTransaction.fulfilled(newTransaction));
    } catch (error) {
        yield put(transactionAction.addTransaction.rejected(error));
    }
}

function* getTransaction(action) {
    const {id} = action.payload;
    try {
        const transaction = yield call(services.transaction.getTransaction, id);
        yield put(transactionAction.getTransaction.fulfilled(transaction));
    } catch (error) {
        yield put(transactionAction.getTransaction.rejected(error));
    }
}

function* listTransaction(action) {
    const {page, size} = action.payload;
    try {
        const transactions = yield call(services.transaction.listTransaction, page, size);
        yield put(transactionAction.listTransaction.fulfilled(transactions));
    } catch (error) {
        yield put(transactionAction.listTransaction.rejected(error));
    }
}

function* updateTransaction(action) {
    const {id, updatedTransaction} = action.payload;
    try {
        const transaction = yield call(services.transaction.updateTransaction, id, updatedTransaction);
        yield put(transactionAction.updateTransaction.fulfilled(transaction));
    } catch (error) {
        yield put(transactionAction.updateTransaction.rejected(error));
    }
}

function* removeTransaction(action) {
    const {id} = action.payload;
    try {
        yield put(transactionAction.setLoading(true));
        const removedId = yield call(services.transaction.removeTransaction, id);
        yield put(transactionAction.removeTransaction.fulfilled(removedId));
    } catch (error) {
        yield put(transactionAction.removeTransaction.rejected(error));
    }
}

export default function* transactionSaga() {
    yield takeLatest(TransactionActionType.ADD_TRANSACTION_REQUESTED, addTransaction);
    yield takeLeading(TransactionActionType.GET_TRANSACTION_REQUESTED, getTransaction);
    yield takeLatest(TransactionActionType.LIST_TRANSACTION_REQUESTED, listTransaction);
    yield takeLatest(TransactionActionType.UPDATE_TRANSACTION_REQUESTED, updateTransaction);
    yield takeLatest(TransactionActionType.REMOVE_TRANSACTION_REQUESTED, removeTransaction);
}
