import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const globalMiddleware: Middleware<unknown, RootState> =
  (store) => (next) => (action) => {
    // if (action?.payload?.statusCode === 401) {
    //   // store.dispatch(handleLogout() as any);
    //   // handleMessageError(messages =>
    //   //   alertError({message: messages.join(', ')}),
    //   // )(action?.payload);
    // }

    return next(action);
  };

const globalMiddlewares = [globalMiddleware];

export default globalMiddlewares;
