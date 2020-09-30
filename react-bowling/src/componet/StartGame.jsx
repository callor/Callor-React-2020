import React, { useState, useEffect, useRef } from "react";
import { Motion, spring } from "react-motion";
import ScoreTable from "../componet/ScoreTable";
import ScoreModal from "../componet/SocreModal";

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

const StartGame = () => {
  //   const componentRef = useRef();

  const [open, setOpen] = useState(false);

  const gameBoxRef = useRef(null);
  const ballRef = useRef(null);

  const [boxWidth, setBoxWidth] = useState(-100);
  const [left, setLeft] = useState(0);

  const btn_rolling = async (e) => {
    // alert("Game Start!! : " + boxWidth);
    console.log("box-width", boxWidth);
    setLeft(+boxWidth);
    const timeoutPopup = (delay) => {
      return new Promise((res) => setTimeout(res, delay));
    };
    await timeoutPopup(1000); //1초 기다리기
    setOpen(true);
    // alert("Strike!!");
  };

  // 화면이 resize 되었을때 반응할 event
  useEffect(() => {
    const handleResize = () => {
      let box_width = gameBoxRef.current.offsetWidth - 100; //box_ref.current ? box_ref.current.offsetWidth : 0;
      console.log("resize width", box_width);
      setBoxWidth(box_width);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gameBoxRef]);

  useEffect(() => {
    let box_width = gameBoxRef.current.offsetWidth; //box_ref.current ? box_ref.current.offsetWidth : 0;
    console.log("init width", box_width);
    setBoxWidth(box_width - 100);
  }, [gameBoxRef.current]);

  //  useResize(gameBoxRef);
  const btn_reset = (e) => {
    setLeft(0);
  };

  return (
    <>
      {scoreList}
      <br />
      <br />
      <div className="bowl_stage" ref={gameBoxRef}>
        <Motion defaultStyle={{ left: 20 }} style={{ left: spring(left) }}>
          {(interpolatedStyle) => (
            <h1
              style={{
                position: "absolute",
                ...interpolatedStyle,
              }}
            >
              <span role="img" aria-label="Bowling Ball">
                🔵
              </span>
            </h1>
          )}
        </Motion>
        <div>
          <span className="bowl_pin" role="img" aria-label="Bowling Pin">
            🎳
          </span>
        </div>
      </div>
      <br />
      <div>
        <button className="roll" onClick={btn_rolling}>
          GO{"  "} !!
        </button>
        <button className="reset" onClick={btn_reset}>
          Restart !!
        </button>
        <ScoreModal open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default StartGame;
