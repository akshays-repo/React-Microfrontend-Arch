import React, { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import AppRouter from "../router/router";

const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/");
    }
  }, [isSignedIn]);

  return (
    <div>
      <AppRouter history={history} />
    </div>
  );
};

export default App;
