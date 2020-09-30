import React, { useState, useEffect, useRef } from "react";
import { Motion, spring } from "react-motion";
import ScoreTable from "../componet/ScoreTable";

const players = [
  { id: 1, name: "홍길동" },
  { id: 2, name: "이몽룡" },
  { id: 3, name: "성춘향" },
  { id: 4, name: "임꺽정" },
  { id: 5, name: "장보고" },
];

const scoreList = players.map((player) => {
  return <ScoreTable key={player.id} name={player.name} />;
});

const useResize = (gameBoxRef) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWidth(gameBoxRef.current.offsetWidth);
      setHeight(gameBoxRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gameBoxRef]);
  return { width, height };
};

const StartGame = () => {
  const componentRef = useRef();
  const { gameBoxRef, width, height } = useResize(componentRef);
  const [horizon, setHorizon] = useState(0);
  const btn_rolling = (e) => {
    window.alert(width);
    setHorizon(width);
  };

  return (
    <>
      {scoreList}
      <br />
      <br />
      <div className="bowl_stage" ref={gameBoxRef}>
        <Motion
          defaultStyle={{ horizon: 0 }}
          style={{ x: spring({ horizon }) }}
        >
          {({ interpolatedStyle }) => (
            <div
              style={{
                animation: `scale 5s infinite`,
                transform: `translateX(${interpolatedStyle}px)`,
              }}
            >
              공
            </div>
          )}
        </Motion>
        <div>핀</div>
      </div>
      <br />
      <button className="roll" onClick={btn_rolling}>
        공굴리러 가자
      </button>
      <br />
      <br />
      <br />
    </>
  );
};

export default StartGame;
