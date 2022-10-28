import React from "react";
import { Link } from "react-router-dom";
import { Counter } from "../feature/Counter";

export function Page1() {
  return (
    <React.Fragment>
      <Counter />
      <div>Page 1 from manager</div>
      <Link to="/page-2">Go to Page 2</Link>
    </React.Fragment>
  );
}
