import { createStore,applyMiddleware } from "redux";
import authReducers from "./reducers/authReducers";
import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import { persistStore,persistReducer } from "redux-persist";

const persistConfig = {
    key:"root",
    storage:AsyncStorage
}

const persistedReducer = persistReducer(persistConfig,authReducers)

let store = createStore(authReducers, applyMiddleware(thunk))

let persistor = persistStore(store)

export {store,persistor} ;