import React from "react";
import { createRoot } from "react-dom/client";
import { createMemoryHistory } from "history";
import { App } from "./App";
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

export { mount };
