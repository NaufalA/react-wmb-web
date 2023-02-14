import {call, put, takeLatest, takeLeading} from "redux-saga/effects";
import {tableAction, TableActionType} from "../actions/index.js";
import services from "../../services/index.js";

function* addTable(action) {
    const {dto} = action.payload;
    try {
        const newTable = yield call(services.table.addTable, dto);
        yield put(tableAction.addTable.fulfilled(newTable));
    } catch (error) {
        yield put(tableAction.addTable.rejected(error));
    }
}

function* getTable(action) {
    const {id} = action.payload;
    try {
        const table = yield call(services.table.getTable, id);
        yield put(tableAction.getTable.fulfilled(table));
    } catch (error) {
        yield put(tableAction.getTable.rejected(error));
    }
}

function* listTable(action) {
    const {page, size} = action.payload;
    try {
        const tables = yield call(services.table.listTable, page, size);
        yield put(tableAction.listTable.fulfilled(tables));
    } catch (error) {
        yield put(tableAction.listTable.rejected(error));
    }
}

function* updateTable(action) {
    const {id, updatedTable} = action.payload;
    try {
        const table = yield call(services.table.updateTable, id, updatedTable);
        yield put(tableAction.updateTable.fulfilled(table));
    } catch (error) {
        yield put(tableAction.updateTable.rejected(error));
    }
}

function* removeTable(action) {
    const {id} = action.payload;
    try {
        yield put(tableAction.setLoading(true));
        const removedId = yield call(services.table.removeTable, id);
        yield put(tableAction.removeTable.fulfilled(removedId));
    } catch (error) {
        yield put(tableAction.removeTable.rejected(error));
    }
}

export default function* tableSaga() {
    yield takeLatest(TableActionType.ADD_TABLE_REQUESTED, addTable);
    yield takeLeading(TableActionType.GET_TABLE_REQUESTED, getTable);
    yield takeLatest(TableActionType.LIST_TABLE_REQUESTED, listTable);
    yield takeLatest(TableActionType.UPDATE_TABLE_REQUESTED, updateTable);
    yield takeLatest(TableActionType.REMOVE_TABLE_REQUESTED, removeTable);
}
