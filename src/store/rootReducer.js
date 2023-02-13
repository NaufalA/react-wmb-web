import {combineReducers} from "redux";
import {authReducer, customerReducer, menuReducer, tableReducer, transactionReducer} from "./reducers/index.js";

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    table: tableReducer,
    transaction: transactionReducer,
    customer: customerReducer
});

export default rootReducer;
