import services from "../../services";
import {menuAction} from "../actions/index.js";

const menuMiddleware = {
    addMenu: (dto) => async (dispatch) => {
        try {
            dispatch(menuAction.setLoading(true));
            const newMenu = await services.menu.addMenu(dto);
            dispatch(menuAction.addMenu(newMenu));
            return newMenu;
        } catch (error) {
            dispatch(menuAction.setError(error));
            throw error;
        }
    },
    getMenu: (id) => async (dispatch) => {
        try {
            dispatch(menuAction.setLoading(true));
            const menu = await services.menu.getMenu(id);
            dispatch(menuAction.getMenu(menu));
            return menu;
        } catch (error) {
            dispatch(menuAction.setError(error));
            throw error;
        }
    },
    listMenu: (page, size) => async (dispatch) => {
        try {
            dispatch(menuAction.setLoading(true));
            const menus = await services.menu.listMenu(page, size);
            dispatch(menuAction.listMenu(menus));
            return menus;
        } catch (error) {
            dispatch(menuAction.setError(error));
            throw error;
        }
    },
    updateMenu: (id, updatedMenu) => async (dispatch) => {
        try {
            dispatch(menuAction.setLoading(true));
            const menu = await services.menu.updateMenu(id, updatedMenu);
            dispatch(menuAction.updateMenu(menu));
            return menu;
        } catch (error) {
            dispatch(menuAction.setError(error));
            throw error;
        }
    },
    removeMenu: (id) => async (dispatch) => {
        try {
            dispatch(menuAction.setLoading(true));
            const removedId = await services.menu.removeMenu(id);
            dispatch(menuAction.removeMenu(removedId));
            return removedId;
        } catch (error) {
            dispatch(menuAction.setError(error));
            throw error;
        }
    },
};

export default menuMiddleware;
