import { Middleware } from "@reduxjs/toolkit";
import authApi from "./api";
import { RootState } from "../../store";

const authMiddleware: Middleware<unknown, RootState> =
  (store) => (next) => (action) => {
    return next(action);
  };

const authMiddlewares = [authMiddleware, authApi.middleware];

export default authMiddlewares;
