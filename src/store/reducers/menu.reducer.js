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
        case MenuActionType.ADD_MENU:
            const updatedData = [ ...state.menuList.data ];
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
        case MenuActionType.GET_MENU:
            return {
                ...state,
                currentMenu: action.payload.menu,
                loading: false,
            };
        case MenuActionType.LIST_MENU:
            return {
                ...state,
                menuList: action.payload.menuList,
                loading: false,
            };
        case MenuActionType.UPDATE_MENU:
            const updatedMenus = [...state.menuList];
            const updatedIndex = updatedMenus.findIndex(c => c.id === action.payload.menu.id);
            updatedMenus[updatedIndex] = action.payload.menu;

            return {
                ...state,
                currentMenu: action.payload.menu,
                menuList: updatedMenus,
                loading: false,
            };
        case MenuActionType.REMOVE_MENU:
            return {
                ...state,
                menuList:  {
                    ...state.menuList,
                    data: state.menuList.data.filter((c) => c.id !== action.payload.id)
                },
                loading: false,
            };
        case MenuActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            };
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
