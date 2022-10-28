import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { Provider } from "react-redux";

import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import { HistoryStrategy } from "../types";
import { store } from "./store";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";

interface AppProps {
  history: HistoryStrategy;
}

export const App = ({ history }: AppProps) => {
  useEffect(() => {
    const unlistenHistoryChanges = history.listen(
      ({ location: { pathname } }) => {
        window.dispatchEvent(
          new CustomEvent("[app2] navigated", { detail: pathname })
        );
      }
    );

    const shellNavigationHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const { pathname: currentPathname } = history.location;
      if (currentPathname === pathname) {
        return;
      }
      history.push(pathname);
    };

    window.addEventListener("[shell] navigated", shellNavigationHandler);

    return () => {
      window.removeEventListener("[shell] navigated", shellNavigationHandler);
      unlistenHistoryChanges();
    };
  }, [history]);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route index element={<Navigate to={"page-1"} />} />
            <Route path="page-1" element={<Page1 />} />
            <Route path="page-2" element={<Page2 />} />
          </Routes>
        </HistoryRouter>
      </Provider>
    </ThemeProvider>
  );
};
