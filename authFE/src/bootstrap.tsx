// import ReactDOM from "react-dom";

import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./app/App";
import React from "react";
import ReactDOM from "react-dom/client";

// Mount function to start up the app
const mount = (
  el: any,
  { onSignIn, onNavigate, defaultHistory, initialPath }: any
) => {
  console.log("el+++++", el);

  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  const root = ReactDOM.createRoot(el);
  root.render(<App />);

  return {
    onParentNavigate({ pathname: nextPathname }: any) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("auth-dev-root") as HTMLElement;

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
