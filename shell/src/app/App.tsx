import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { Router } from "../router/Router";
import { store } from "./store";

export const App = () => (
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  </Provider>
);
