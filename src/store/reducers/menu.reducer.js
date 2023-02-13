import {MenuActionType} from "../actions/index.js";

const initialState = {
    currentMenu: null,
    menuList: {
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

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case MenuActionType.ADD_MENU_FULFILLED:
            const updatedData = [...state.menuList.data];
            updatedData.push(action.payload.newMenu);
            return {
                ...state,
                currentMenu: action.payload.newMenu,
                menuList: {
                    ...state.menuList,
                    data: updatedData
                },
                loading: false,
            };
        case MenuActionType.GET_MENU_FULFILLED:
            return {
                ...state,
                currentMenu: action.payload.menu,
                loading: false,
            };
        case MenuActionType.LIST_MENU_FULFILLED:
            return {
                ...state,
                menuList: action.payload.menuList,
                loading: false,
            };
        case MenuActionType.UPDATE_MENU_FULFILLED:
            const updatedMenus = [...state.menuList.data];
            const updatedIndex = updatedMenus.findIndex(c => c.id === action.payload.updatedMenu.id);
            updatedMenus[updatedIndex] = action.payload.updatedMenu;

            return {
                ...state,
                currentMenu: action.payload.menu,
                menuList: {
                    ...state.menuList,
                    data: updatedMenus
                },
                loading: false,
            };
        case MenuActionType.REMOVE_MENU_FULFILLED:
            return {
                ...state,
                menuList: {
                    ...state.menuList,
                    data: state.menuList.data.filter((c) => c.id !== action.payload.id)
                },
                loading: false,
            };
        case MenuActionType.MENU_ADD_REQUESTED:
        case MenuActionType.MENU_GET_REQUESTED:
        case MenuActionType.MENU_LIST_REQUESTED:
        case MenuActionType.MENU_UPDATE_REQUESTED:
        case MenuActionType.MENU_REMOVE_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case MenuActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            };
        case MenuActionType.MENU_ADD_REJECTED:
        case MenuActionType.MENU_GET_REJECTED:
        case MenuActionType.MENU_LIST_REJECTED:
        case MenuActionType.MENU_UPDATE_REJECTED:
        case MenuActionType.MENU_REMOVE_REJECTED:
        case MenuActionType.SET_ERROR:
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
        default:
            return state;
    }
};

export default menuReducer;
