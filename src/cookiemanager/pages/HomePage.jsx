import { MainInfo, Features } from "../components";
import { HomeLayout } from "../layout/HomeLayout";

export const HomePage = () => {
  return (
    <>
      <HomeLayout>
        <MainInfo />
        <Features />
      </HomeLayout>
    </>
  );
};
