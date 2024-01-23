import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "../reducers/auth";
import { combineReducers } from "@reduxjs/toolkit";
import global from "../reducers/global";
import user from "../reducers/user";

const globalPersistConfig = {
  key: "global",
  storage,
  whitelist: [],
};

const globalReducer = persistReducer(globalPersistConfig, global.globalReducer);

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken"],
};
const authReducer = persistReducer(authPersistConfig, auth.authReducer);

const rootReducer = combineReducers({
  globalReducer,
  authReducer,
  authApi: auth.authApi,
  userReducer: user.userReducer,
  userApi: user.userApi,
});

export default rootReducer;
