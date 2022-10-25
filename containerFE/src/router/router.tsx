import { BrowserHistory } from "history";
import React, { FC } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AuthFE from "../microApps/AuthFE";
import ManagerFE from "../microApps/ManagerFE";
import VetFE from "../microApps/VetFE";

type Props = {
  history: BrowserHistory;
};

const AppRouter: FC<Props> = ({ history }) => {
  return (
    <Router
      location={history.location}
      navigator={history}
      navigationType={history.action}
    >
      <Routes>
        <Route index element={<AuthFE />} />
        <Route path="manager" element={<ManagerFE />} />
        <Route path="dashboard" element={<VetFE />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
