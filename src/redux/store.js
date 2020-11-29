import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import * as History from "history";
import rootReducer from "./reducers/index";

export const history = History.createBrowserHistory();

const initialState = {};
const middleware = [thunk];

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
  )
);
