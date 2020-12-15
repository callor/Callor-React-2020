import React, { useState } from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";
import "./App.css";

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  margin: 0 auto;
  width: 180px;
  height: 180px;
  transform: rotate(${(props) => props.transform}deg);
}
`;

const Preloader = () => {
  const [startLoader, setStartLoader] = useState(0);
  const [numberOfSpins] = useState(360 * 5);

  const handleStart = (e) => {
    setStartLoader(1);
  };
  const handleStop = (e) => {
    setStartLoader(0);
  };

  return (
    <div id="parent">
      <div className="container">
        <div id="preloader-holder">
          <p id="preloader-text">
            돌려주세요!
            <button
              onClick={handleStart}
              className="btn btn-lg btn-primary m-1"
            >
              오른쪽으로
            </button>
            <button onClick={handleStop} className="btn btn-lg btn-success m-1">
              왼쪽으로
            </button>
          </p>
          <div id="preloader-wrapper">
            <Motion
              defaultStyle={{ transform: 0 }}
              style={{
                transform: spring(startLoader ? numberOfSpins : 0, {
                  stiffness: 10,
                  damping: 10,
                }),
              }}
            >
              {(style) => <Loader transform={style.transform} />}
            </Motion>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
