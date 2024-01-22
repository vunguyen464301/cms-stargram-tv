import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useAppSelector } from "./src/services/store";
import { selectorAccessToken } from "./src/services/reducers/auth";

const authRouters = createBrowserRouter([
  {
    path: "/*",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <div>login</div>,
  },
]);

const privateRouters = createBrowserRouter([
  {
    path: "/home",
    element: <div>Home</div>,
  },
]);

const RouterApp = (): JSX.Element => {
  const selectAccessToken = useAppSelector(selectorAccessToken);

  return (
    <RouterProvider router={selectAccessToken ? privateRouters : authRouters} />
  );
};

export default RouterApp;
