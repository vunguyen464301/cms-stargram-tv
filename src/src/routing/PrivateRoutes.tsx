import { ReactNode, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { privateRoutes } from "./routes";
import PrivateLayout from "../components/layouts/PrivateLayout";

const SupportLayout = ({
  children,
}: {
  children: ReactNode | JSX.Element;
}): JSX.Element => {
  return (
    <PrivateLayout>
      <Suspense>{children}</Suspense>
    </PrivateLayout>
  );
};

const PrivateRoutes = (): JSX.Element => {
  const element = useRoutes(privateRoutes);

  return <SupportLayout>{element}</SupportLayout>;
};

export { SupportLayout };
export default PrivateRoutes;
