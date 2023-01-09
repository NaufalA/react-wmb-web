import services from "../../services";
import {tableAction} from "../actions/index.js";

const tableMiddleware = {
    addTable: (dto) => async (dispatch) => {
        try {
            dispatch(tableAction.setLoading(true));
            const newTable = await services.table.addTable(dto);
            dispatch(tableAction.addTable(newTable));
            return newTable;
        } catch (error) {
            dispatch(tableAction.setError(error));
            throw error;
        }
    },
    getTable: (id) => async (dispatch) => {
        try {
            dispatch(tableAction.setLoading(true));
            const table = await services.table.getTable(id);
            dispatch(tableAction.getTable(table));
            return table;
        } catch (error) {
            dispatch(tableAction.setError(error));
            throw error;
        }
    },
    listTable: (page, size) => async (dispatch) => {
        try {
            dispatch(tableAction.setLoading(true));
            const tables = await services.table.listTable(page, size);
            dispatch(tableAction.listTable(tables));
            return tables;
        } catch (error) {
            dispatch(tableAction.setError(error));
            throw error;
        }
    },
    updateTable: (id, updatedTable) => async (dispatch) => {
        try {
            dispatch(tableAction.setLoading(true));
            const table = await services.table.updateTable(id, updatedTable);
            dispatch(tableAction.updateTable(table));
            return table;
        } catch (error) {
            dispatch(tableAction.setError(error));
            throw error;
        }
    },
    removeTable: (id) => async (dispatch) => {
        try {
            dispatch(tableAction.setLoading(true));
            const removedId = await services.table.removeTable(id);
            dispatch(tableAction.removeTable(removedId));
            return removedId;
        } catch (error) {
            dispatch(tableAction.setError(error));
            throw error;
        }
    },
};

export default tableMiddleware;
