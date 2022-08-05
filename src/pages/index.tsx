import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import { Intro } from "./intro";
import { Main } from "./main";

export const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.intro} element={<Intro />} />
      <Route path={routes.main} element={<Main />} />
    </Routes>
  );
};
