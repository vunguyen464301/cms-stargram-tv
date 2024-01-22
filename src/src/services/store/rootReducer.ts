import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "../reducers/auth";
import { combineReducers } from "@reduxjs/toolkit";
import global from "../reducers/global";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken"],
};
const authReducer = persistReducer(authPersistConfig, auth.authReducer);

const globalPersistConfig = {
  key: "global",
  storage,
  whitelist: [],
};
const globalReducer = persistReducer(globalPersistConfig, global.globalReducer);

const rootReducer = combineReducers({
  authReducer,
  authApi: auth.authApi,
  globalReducer,
});

export default rootReducer;
