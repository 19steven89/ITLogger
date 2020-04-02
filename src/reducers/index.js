import { combineReducers } from "redux";
import logReducer from "./logReducer";

export default combineReducers({
    // make log which is part of the state = to logReducer
    log: logReducer
});