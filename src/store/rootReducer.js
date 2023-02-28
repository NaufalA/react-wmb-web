import {combineReducers} from "redux";
import {customerReducer, menuReducer, tableReducer, transactionReducer} from "./reducers/index.js";

const rootReducer = combineReducers({
    menu: menuReducer,
    table: tableReducer,
    transaction: transactionReducer,
    customer: customerReducer
});

export default rootReducer;
