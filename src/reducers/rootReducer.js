import { combineReducers } from "redux";
import { bankingReducers } from "./bankingReducers";

export const reducers = combineReducers({
    banking: bankingReducers,
});