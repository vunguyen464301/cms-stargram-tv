import userApi from "./api";
import userSlice from "./slice";

const userReducer = userSlice.reducer;

const user = {
  userReducer,
  [userApi.reducerPath]: userApi.reducer,
};

export {};
export {};
export { default as userMiddlewares } from "./middleware";
export default user;
