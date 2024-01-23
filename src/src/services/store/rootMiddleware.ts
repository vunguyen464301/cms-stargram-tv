import { type Middleware } from "@reduxjs/toolkit";
import { globalMiddlewares } from "../reducers/global";
import { authMiddlewares } from "../reducers/auth";
import { userMiddlewares } from "../reducers/user";

const middlewares: Middleware[] = [
  ...globalMiddlewares,
  ...authMiddlewares,
  ...userMiddlewares,
];

export default middlewares;
