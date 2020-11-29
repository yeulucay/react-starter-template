import { combineReducers } from "redux";
import Auth from "./auth.reducer";

const reducers = combineReducers({
  auth: Auth
});

export default reducers;