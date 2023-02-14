import {call, put, takeLatest} from "redux-saga/effects";
import {authAction, AuthActionType} from "../actions/index.js";
import services from "../../services/index.js";

function* login(action) {
    const {email, password} = action.payload;
    try {
        const res = yield call(services.auth.login, {email, password});
        yield put(authAction.login.fulfilled(res));
    } catch (error) {
        yield put(authAction.login.rejected(error));
        return {rejected: error};
    }
}

function* validate() {
    try {
        const res = yield call(services.auth.validate);
        yield put(authAction.validate.fulfilled(res));
        return {fulfilled: res};
    } catch (error) {
        yield put(authAction.validate.rejected(error));
        return {rejected: error};
    }
}

function* logout() {
    try {
        const res = yield call(services.auth.logout);
        yield put(authAction.logout.fulfilled(res));
        return {fulfilled: res};
    } catch (error) {
        yield put(authAction.logout.rejected(error));
        return {rejected: error};
    }
}

export default function* authSaga() {
    yield takeLatest(AuthActionType.AUTH_LOGIN_REQUESTED, login);
    yield takeLatest(AuthActionType.AUTH_VALIDATE_REQUESTED, validate);
    yield takeLatest(AuthActionType.AUTH_LOGOUT_REQUESTED, logout);
};