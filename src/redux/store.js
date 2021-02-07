import { createStore,applyMiddleware } from "redux";
import authReducers from "./reducers/authReducers";
import thunk from "redux-thunk"
let store = createStore(authReducers, applyMiddleware(thunk))

export default store;