import { type Middleware } from "@reduxjs/toolkit";
import { globalMiddlewares } from "../reducers/global";
import { authMiddlewares } from "../reducers/auth";

const middlewares: Middleware[] = [...globalMiddlewares, ...authMiddlewares];

export default middlewares;
