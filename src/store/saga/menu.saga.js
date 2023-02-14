import {call, put, takeLatest, takeLeading} from "redux-saga/effects";
import {menuAction, MenuActionType} from "../actions/index.js";
import services from "../../services/index.js";

function* addMenu(action) {
    const {dto} = action.payload;
    try {
        const newMenu = yield call(services.menu.addMenu, dto);
        yield put(menuAction.addMenu.fulfilled(newMenu));
    } catch (error) {
        yield put(menuAction.addMenu.rejected(error));
    }
}

function* getMenu(action) {
    const {id} = action.payload;
    try {
        const menu = yield call(services.menu.getMenu, id);
        yield put(menuAction.getMenu.fulfilled(menu));
    } catch (error) {
        yield put(menuAction.getMenu.rejected(error));
    }
}

function* listMenu(action) {
    const {page, size} = action.payload;
    try {
        const menus = yield call(services.menu.listMenu, page, size);
        yield put(menuAction.listMenu.fulfilled(menus));
    } catch (error) {
        yield put(menuAction.listMenu.rejected(error));
    }
}

function* updateMenu(action) {
    const {id, updatedMenu} = action.payload;
    try {
        const menu = yield call(services.menu.updateMenu, id, updatedMenu);
        yield put(menuAction.updateMenu.fulfilled(menu));
    } catch (error) {
        yield put(menuAction.updateMenu.rejected(error));
    }
}

function* removeMenu(action) {
    const {id} = action.payload;
    try {
        yield put(menuAction.setLoading(true));
        const removedId = yield call(services.menu.removeMenu, id);
        yield put(menuAction.removeMenu.fulfilled(removedId));
    } catch (error) {
        yield put(menuAction.removeMenu.rejected(error));
    }
}

export default function* menuSaga() {
    yield takeLatest(MenuActionType.ADD_MENU_REQUESTED, addMenu);
    yield takeLeading(MenuActionType.GET_MENU_REQUESTED, getMenu);
    yield takeLatest(MenuActionType.LIST_MENU_REQUESTED, listMenu);
    yield takeLatest(MenuActionType.UPDATE_MENU_REQUESTED, updateMenu);
    yield takeLatest(MenuActionType.REMOVE_MENU_REQUESTED, removeMenu);
}
