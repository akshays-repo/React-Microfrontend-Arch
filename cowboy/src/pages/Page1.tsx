import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Counter } from "../feature/Counter";
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export function Page1() {
  return (
    <React.Fragment>
      <Counter />
      <Wrapper>
        <div>Page 1 from App2</div>
      </Wrapper>
      <Link to="/page-2">Go to Page 2</Link>
    </React.Fragment>
  );
}
