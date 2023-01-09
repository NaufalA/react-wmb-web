import {combineReducers} from "redux";
import {authReducer, menuReducer, tableReducer, transactionReducer} from "./reducers/index.js";

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    table: tableReducer,
    transaction: transactionReducer
});

export default rootReducer;
