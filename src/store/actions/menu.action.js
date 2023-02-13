import {createAsyncActionTypes} from "../utils/actionUtility.js";

export const MenuActionType = {
    ...createAsyncActionTypes("ADD_MENU", "menu/add"),
    ...createAsyncActionTypes("GET_MENU", "menu/get"),
    ...createAsyncActionTypes("LIST_MENU", "menu/list"),
    ...createAsyncActionTypes("UPDATE_MENU", "menu/update"),
    ...createAsyncActionTypes("REMOVE_MENU", "menu/remove"),
    SET_LOADING: "menu/set-loading",
    SET_ERROR: "menu/set-error"
};

export const menuAction = {
    addMenu: {
        requested: (dto) => ({
            type: MenuActionType.ADD_MENU_REQUESTED,
            payload: {dto}
        }),
        fulfilled: (newMenu) => ({
            type: MenuActionType.ADD_MENU_FULFILLED,
            payload: {newMenu},
        }),
        rejected: (error) => ({
            type: MenuActionType.ADD_MENU_REJECTED,
            payload: {error}
        })
    },
    getMenu: {
        requested: (id) => ({
            type: MenuActionType.GET_MENU_REQUESTED,
            payload: {id}
        }),
        fulfilled: (menu) => ({
            type: MenuActionType.GET_MENU_FULFILLED,
            payload: {menu},
        }),
        rejected: (error) => ({
            type: MenuActionType.GET_MENU_REJECTED,
            payload: {error}
        })
    },
    listMenu: {
        requested: (page, size) => ({
            type: MenuActionType.LIST_MENU_REQUESTED,
            payload: {page, size}
        }),
        fulfilled: (menuList) => ({
            type: MenuActionType.LIST_MENU_FULFILLED,
            payload: {menuList},
        }),
        rejected: (error) => ({
            type: MenuActionType.LIST_MENU_REJECTED,
            payload: {error}
        })
    },
    updateMenu: {
        requested: (id, updatedMenu) => ({
            type: MenuActionType.UPDATE_MENU_REQUESTED,
            payload: {id, updatedMenu}
        }),
        fulfilled: (updatedMenu) => ({
            type: MenuActionType.UPDATE_MENU_FULFILLED,
            payload: {updatedMenu},
        }),
        rejected: (error) => ({
            type: MenuActionType.UPDATE_MENU_REJECTED,
            payload: {error}
        })
    },
    removeMenu: {
        requested: (id) => ({
            type: MenuActionType.REMOVE_MENU_REQUESTED,
            payload: {id}
        }),
        fulfilled: (id) => ({
            type: MenuActionType.REMOVE_MENU_FULFILLED,
            payload: {id},
        }),
        rejected: (error) => ({
            type: MenuActionType.REMOVE_MENU_REJECTED,
            payload: {error}
        })
    },
    setLoading: (loading) => ({
        type: MenuActionType.SET_LOADING,
        payload: {loading}
    }),
    setError: (error) => ({
        type: MenuActionType.SET_ERROR,
        payload: {error}
    })
};