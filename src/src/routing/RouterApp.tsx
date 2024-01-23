import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./AuthRoutes";
import { useAppSelector } from "../services/store";
import { selectorAccessToken } from "../services/reducers/auth";

const RouterApp = (): JSX.Element => {
  const selectAccessToken = useAppSelector(selectorAccessToken);

  return (
    <Suspense>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route>
            {selectAccessToken ? (
              <Route path="*" element={<PrivateRoutes />} />
            ) : (
              <Route path="*" element={<PublicRoutes />} />
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RouterApp;
