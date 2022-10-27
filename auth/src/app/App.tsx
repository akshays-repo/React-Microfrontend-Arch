import React, { useEffect } from "react";
import { Provider } from "react-redux";

import { HistoryStrategy } from "../types";
import AppRouter from "../router/Router";
import { store } from "./store";
import "../index.css";

interface AppProps {
  history: HistoryStrategy;
}

export const App = ({ history }: AppProps) => {
  useEffect(() => {
    const unlistenHistoryChanges = history.listen(
      ({ location: { pathname } }) => {
        window.dispatchEvent(
          new CustomEvent("[app1] navigated", { detail: pathname })
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
    <Provider store={store}>
      <AppRouter history={history} />
    </Provider>
  );
};
