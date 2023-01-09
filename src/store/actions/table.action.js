export const TableActionType = {
    ADD_TABLE: "table/add",
    GET_TABLE: "table/get",
    LIST_TABLE: "table/list",
    UPDATE_TABLE: "table/update",
    REMOVE_TABLE: "table/remove",
    SET_LOADING: "table/set-loading",
    SET_ERROR: "table/set-error"
};

export const tableAction = {
    addTable: (newTable) => ({
        type: TableActionType.ADD_TABLE,
        payload: { newTable },
    }),
    getTable: (table) => ({
        type: TableActionType.GET_TABLE,
        payload: { table },
    }),
    listTable: (tableList) => ({
        type: TableActionType.LIST_TABLE,
        payload: { tableList },
    }),
    updateTable: (updatedTable) => ({
        type: TableActionType.UPDATE_TABLE,
        payload: { updatedTable },
    }),
    removeTable: (id) => ({
        type: TableActionType.REMOVE_TABLE,
        payload: { id },
    }),
    setLoading: (loading) => ({
        type: TableActionType.SET_LOADING,
        payload: { loading }
    }),
    setError: (error) => ({
        type: TableActionType.SET_ERROR,
        payload: { error }
    })
};