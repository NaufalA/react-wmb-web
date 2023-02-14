import {createAsyncActionTypes} from "../utils/actionUtility.js";

export const TableActionType = {
    ...createAsyncActionTypes("ADD_TABLE", "table/add"),
    ...createAsyncActionTypes("GET_TABLE", "table/get"),
    ...createAsyncActionTypes("LIST_TABLE", "table/list"),
    ...createAsyncActionTypes("UPDATE_TABLE", "table/update"),
    ...createAsyncActionTypes("REMOVE_TABLE", "table/remove"),
    SET_LOADING: "table/set-loading",
    SET_ERROR: "table/set-error",
    SET_CURRENT_TABLE: "table/set-current"
};

export const tableAction = {
    addTable: {
        requested: (dto) => ({
            type: TableActionType.ADD_TABLE_REQUESTED,
            payload: {dto}
        }),
        fulfilled: (newTable) => ({
            type: TableActionType.ADD_TABLE_FULFILLED,
            payload: {newTable},
        }),
        rejected: (error) => ({
            type: TableActionType.ADD_TABLE_REJECTED,
            payload: {error}
        })
    },
    getTable: {
        requested: (id) => ({
            type: TableActionType.GET_TABLE_REQUESTED,
            payload: {id}
        }),
        fulfilled: (table) => ({
            type: TableActionType.GET_TABLE_FULFILLED,
            payload: {table},
        }),
        rejected: (error) => ({
            type: TableActionType.GET_TABLE_REJECTED,
            payload: {error}
        })
    },
    listTable: {
        requested: (page, size) => ({
            type: TableActionType.LIST_TABLE_REQUESTED,
            payload: {page, size}
        }),
        fulfilled: (tableList) => ({
            type: TableActionType.LIST_TABLE_FULFILLED,
            payload: {tableList},
        }),
        rejected: (error) => ({
            type: TableActionType.LIST_TABLE_REJECTED,
            payload: {error}
        })
    },
    updateTable: {
        requested: (id, updatedTable) => ({
            type: TableActionType.UPDATE_TABLE_REQUESTED,
            payload: {id, updatedTable}
        }),
        fulfilled: (updatedTable) => ({
            type: TableActionType.UPDATE_TABLE_FULFILLED,
            payload: {updatedTable},
        }),
        rejected: (error) => ({
            type: TableActionType.UPDATE_TABLE_REJECTED,
            payload: {error}
        })
    },
    removeTable: {
        requested: (id) => ({
            type: TableActionType.REMOVE_TABLE_REQUESTED,
            payload: {id}
        }),
        fulfilled: (id) => ({
            type: TableActionType.REMOVE_TABLE_FULFILLED,
            payload: {id},
        }),
        rejected: (error) => ({
            type: TableActionType.REMOVE_TABLE_REJECTED,
            payload: {error}
        })
    },
    setLoading: (loading) => ({
        type: TableActionType.SET_LOADING,
        payload: {loading}
    }),
    setError: (error) => ({
        type: TableActionType.SET_ERROR,
        payload: {error}
    }),
    setCurrentTable: (currentTable) => ({
        type: TableActionType.SET_CURRENT_TABLE,
        payload: {currentTable}
    })
};
