import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useAppSelector } from "./src/services/store";
import { selectorAccessToken } from "./src/services/reducers/auth";
import LoginPage from "./src/pages/login";
import HomePage from "./src/pages/home";

const authRouters = createBrowserRouter([
  {
    path: "/*",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const privateRouters = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
]);

const RouterApp = (): JSX.Element => {
  const selectAccessToken = useAppSelector(selectorAccessToken);

  return (
    <RouterProvider router={selectAccessToken ? privateRouters : authRouters} />
  );
};

export default RouterApp;
