import React, { FC } from "react";
import { HistoryStrategy } from "../types";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUp";
import { URLS } from "./url";

interface Props {
  history: HistoryStrategy;
}

const AppRouter: FC<Props> = ({ history }) => {
  return (
    <div>
      <HistoryRouter history={history}>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path={URLS.LOGIN} element={<LoginPage />} />
          <Route path={URLS.SIGNUP} element={<SignUpPage />} />
        </Routes>
      </HistoryRouter>
    </div>
  );
};

export default AppRouter;
