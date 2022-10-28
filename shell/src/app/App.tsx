import React, { Suspense } from "react";
import { Provider } from "react-redux";
import PageLoading from "../components/PageLoading";
import { Router } from "../router/Router";
import { store } from "./store";

export const App = () => (
  <Provider store={store}>
    <Suspense fallback={<PageLoading />}>
      <Router />
    </Suspense>
  </Provider>
);
