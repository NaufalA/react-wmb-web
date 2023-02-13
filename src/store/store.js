import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootSaga from "./root.saga.js";

const sagaMiddleware = createSagaMiddleware();
const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware)
);

const store = createStore(rootReducer, composedEnhancer);

sagaMiddleware.run(rootSaga);

export default store;