import { useRoutes } from "react-router-dom";
import { authRouters } from "./routes";

const AuthRoutes = (): JSX.Element => {
  const element = useRoutes(authRouters);

  return <>{element}</>;
};

export default AuthRoutes;
