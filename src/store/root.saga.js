import {all, call, spawn} from "redux-saga/effects";
import menuSaga from "./saga/menu.saga.js";

export default function* rootSaga() {
    const sagas = [
        menuSaga,
    ];

    yield all(sagas.map(saga =>
        spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                } catch (e) {
                    console.log(e)
                }
            }
        }))
    );
}