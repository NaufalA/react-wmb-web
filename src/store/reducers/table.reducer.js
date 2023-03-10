import {TableActionType} from "../actions/index.js";

const initialState = {
    currentTable: null,
    tableList: {
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

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case TableActionType.ADD_TABLE:
            const updatedData = [ ...state.tableList.data ];
            updatedData.push(action.payload.newTable);
            return {
                ...state,
                currentTable: action.payload.newTable,
                tableList: {
                    ...state.tableList,
                    data: updatedData
                },
                loading: false,
            };
        case TableActionType.GET_TABLE:
            return {
                ...state,
                currentTable: action.payload.table,
                loading: false,
            };
        case TableActionType.LIST_TABLE:
            return {
                ...state,
                tableList: action.payload.tableList,
                loading: false,
            };
        case TableActionType.UPDATE_TABLE:
            const updatedTables = [...state.tableList.data];
            const updatedIndex = updatedTables.findIndex(t => t.id === action.payload.updatedTable.id);
            updatedTables[updatedIndex] = action.payload.updatedTable;

            return {
                ...state,
                currentTable: action.payload.table,
                tableList: {
                    ...state.tableList,
                    data: updatedTables
                },
                loading: false,
            };
        case TableActionType.REMOVE_TABLE:
            return {
                ...state,
                tableList:  {
                    ...state.tableList,
                    data: state.tableList.data.filter((c) => c.id !== action.payload.id)
                },
                loading: false,
            };
        case TableActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            };
        case TableActionType.SET_ERROR:
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
        default:
            return state;
    }
};

export default tableReducer;
