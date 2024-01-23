import { Middleware } from "@reduxjs/toolkit";
import userApi from "./api";
import { RootState } from "../../store";

const userMiddleware: Middleware<unknown, RootState> =
  (store) => (next) => (action) => {
    return next(action);
  };

const userMiddlewares = [userMiddleware, userApi.middleware];

export default userMiddlewares;
