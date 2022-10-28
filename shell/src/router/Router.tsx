import React, { lazy } from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
} from "react-router-dom";
import { Layout } from "../components/Layout";
import {
  authRoutingPrefix,
  cowBoyRoutingPrefix,
  crmRoutingPrefix,
  managerRoutingPrefix,
  shellBrowserHistory,
} from "./constants";

const AuthLazy = lazy(() => import("../microApps/Authentication"));
const CowBoyLazy = lazy(() => import("../microApps/CowBoy"));

const CrmLazy = lazy(() => import("../microApps/Crm"));
const ManagerLazy = lazy(() => import("../microApps/Manager"));

export function Router() {
  return (
    <HistoryRouter history={shellBrowserHistory}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={`/${authRoutingPrefix}`} />} />
          <Route path={`/${authRoutingPrefix}/*`} element={<AuthLazy />} />
          <Route path={`/${cowBoyRoutingPrefix}/*`} element={<CowBoyLazy />} />
          <Route path={`/${crmRoutingPrefix}/*`} element={<CrmLazy />} />
          <Route
            path={`/${managerRoutingPrefix}/*`}
            element={<ManagerLazy />}
          />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}
