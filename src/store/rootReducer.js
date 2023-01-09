import {combineReducers} from "redux";
import {authReducer, menuReducer, tableReducer} from "./reducers/index.js";

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    table: tableReducer
});

export default rootReducer;
