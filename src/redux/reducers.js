import { combineReducers } from "redux";
import cardListReducer from "./cardListReducer";

const rootReducer = combineReducers({ cardListReducer });

export default rootReducer;
