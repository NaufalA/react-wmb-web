import {combineReducers} from "redux";
import {authReducer, menuReducer} from "./reducers/index.js";

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer
});

export default rootReducer;
