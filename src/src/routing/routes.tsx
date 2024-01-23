import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import UserPage from "../pages/user";

const LoginPage = lazy(() => import("../pages/login"));
const HomePage = lazy(() => import("../pages/home"));

const privateRoutes: RouteObject[] = [
  {
    path: "/*",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home/*",
    element: <HomePage />,
  },
  {
    path: "/user/*",
    element: <UserPage />,
  },
];

const authRouters: RouteObject[] = [
  {
    path: "/*",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export { privateRoutes, authRouters };
