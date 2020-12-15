import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Motion, spring } from "react-motion";
import { injectGlobal } from "styled-components";
import Card from "./Card";

// injectGlobal`
//   body {
//     margin: 0;
//     background: #fbfbfb;
//   }
// `;

const AnimatedCard = (props) => {
  return (
    <Motion
      defaultStyle={{ scale: 0.5 }}
      style={{ scale: spring(1, { stiffness: 60, damping: 10 }) }}
    >
      {(interpolatedStyle) => (
        <Card scale={interpolatedStyle.scale} {...props} />
      )}
    </Motion>
  );
};

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [left, setLeft] = useState(0);

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    if (inputValue && !isNaN(inputValue)) {
      setLeft(+inputValue);
    }
  };
  const reset = () => setLeft(0);

  return (
    <div className="App">
      <AnimatedCard />
      <AnimatedCard title="😎 Fancy!" content="Nothing to say" />
      <Motion defaultStyle={{ left: -100 }} style={{ left: spring(left) }}>
        {(val) => (
          <h1 style={{ position: "absolute", ...val }}>
            Hello!{" "}
            <span role="img" aria-label="Hand wave">
              👋
            </span>
          </h1>
        )}
      </Motion>

      <input
        type="number"
        placeholder="enter a value"
        value={inputValue}
        onChange={inputChange}
      />
      <button onClick={() => handleClick()}>Set</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
