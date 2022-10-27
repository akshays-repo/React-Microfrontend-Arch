import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Counter } from "../feature/Counter";
import { URLS } from "../router/url";

export function LoginPage() {
  const naviage = useNavigate();
  const location = useLocation();
  return (
    <React.Fragment>
      <div>WELCOME TO WESTOCK</div>

      <Counter />
      <Link to={URLS.SIGNUP}>create an account </Link>
      {/* <button
        onClick={() => {
          naviage(location.pathname + "/cowboy", {
            replace: true,
          });
        }}
      >
        CowBoy
      </button> */}
    </React.Fragment>
  );
}
