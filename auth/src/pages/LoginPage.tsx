import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginFeature from "../feature/authentication/Login";
import { Counter } from "../feature/Counter";
import { URLS } from "../router/url";

export function LoginPage() {
  const naviage = useNavigate();
  const location = useLocation();
  return (
    <React.Fragment>
      <LoginFeature />
    </React.Fragment>
  );
}
