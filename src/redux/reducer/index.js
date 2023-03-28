import { combineReducers } from "redux";
import { restoReducer, detailReducer } from "./restoReducer";

const reducers = combineReducers({
  allRestos: restoReducer,
  allDetail: detailReducer,
});

export default reducers;
