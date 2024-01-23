import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

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
