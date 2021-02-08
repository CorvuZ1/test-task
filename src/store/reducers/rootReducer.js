import { combineReducers } from "redux";
import authReducer from "./auth"
import newsReducer from "./news";

export default combineReducers({
  auth: authReducer,
  news: newsReducer
})