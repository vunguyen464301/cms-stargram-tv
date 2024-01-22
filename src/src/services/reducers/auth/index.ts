import { RootState } from "../../store";
import authApi from "./api";
import authSlice from "./slice";

const authReducer = authSlice.reducer;

const { setAccessToken } = authSlice.actions;

const selectorAccessToken = (state: RootState) => state.authReducer.accessToken;

const auth = {
  authReducer,
  [authApi.reducerPath]: authApi.reducer,
};

export { setAccessToken };
export { selectorAccessToken };
export { default as authMiddlewares } from "./middleware";
export default auth;
