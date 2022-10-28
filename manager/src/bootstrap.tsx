import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserHistory, createMemoryHistory } from "history";
import { App } from "./app/App";
import { HistoryStrategy } from "./types";

type Mount = {
  mountPoint: HTMLElement;
  initialPathname?: string;
  historyStrategy?: HistoryStrategy;
};

const mount = ({ mountPoint, initialPathname, historyStrategy }: Mount) => {
  const history =
    historyStrategy ||
    createMemoryHistory({
      initialEntries: [initialPathname || "/"],
    });

  const root = createRoot(mountPoint);
  root.render(<App history={history} />);
};

if (process.env.NODE_ENV === "development") {
  const localRoot = document.getElementById("manager-local");
  const browserHistory = createBrowserHistory();
  if (localRoot) {
    mount({
      mountPoint: localRoot!,
      historyStrategy: browserHistory,
    });
  }
}

export { mount };
