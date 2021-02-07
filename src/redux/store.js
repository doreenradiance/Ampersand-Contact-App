import { createStore } from "redux";
import reducers from "./reducers/authReducers";

let store = createStore(reducers)

export default store;