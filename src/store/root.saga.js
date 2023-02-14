import {all, call, spawn} from "redux-saga/effects";
import {customerSaga, menuSaga, tableSaga, transactionSaga} from "./saga";

export default function* rootSaga() {
    const sagas = [
        menuSaga,
        customerSaga,
        tableSaga,
        transactionSaga
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