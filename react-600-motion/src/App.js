import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";
import Preloader from "./Preloader";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Wrapper>
          <Preloader />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
