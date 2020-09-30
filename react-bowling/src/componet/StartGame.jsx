import React, { useState, useEffect, useRef } from "react";
import { Motion, spring } from "react-motion";
import ScoreTable from "../componet/ScoreTable";
import ScoreModal from "../componet/SocreModal";
import "./StartGame.css";

const players = [
  { id: 1, name: "홍길동" },
  { id: 2, name: "이몽룡" },
  { id: 3, name: "성춘향" },
  { id: 4, name: "임꺽정" },
  { id: 5, name: "장보고" },
];

const ball_list = [
  "/balls/bowl_ball (1).png",
  "/balls/bowl_ball (2).png",
  "/balls/bowl_ball (3).png",
  "/balls/bowl_ball (4).png",
  "/balls/bowl_ball (5).png",
  "/balls/bowl_ball (6).png",
  "/balls/bowl_ball (7).png",
  "/balls/bowl_ball (8).png",
  "/balls/bowl_ball (9).png",
  "/balls/bowl_ball (10).png",
  "/balls/bowl_ball (11).png",
  "/balls/bowl_ball (12).png",
  "/balls/bowl_ball (13).png",
  "/balls/bowl_ball (14).png",
  "/balls/bowl_ball (15).png",
  "/balls/bowl_ball (16).png",
  "/balls/bowl_ball (17).png",
  "/balls/bowl_ball (18).png",
  "/balls/bowl_ball (19).png",
];

const scoreList = players.map((player) => {
  return <ScoreTable key={player.id} name={player.name} />;
});

const StartGame = () => {
  //   const componentRef = useRef();

  const [openModal, setOpenModal] = useState(false);

  const gameBoxRef = useRef(null);

  const [ball, setBall] = useState("/balls/bowl_ball (1).png");
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
    setOpenModal(true);
    // alert("Strike!!");
  };

  // ball 이미지를 랜덤으로
  useEffect(() => {
    const rnd = Math.floor(Math.random() * 19);
    console.log("random", rnd);
    setBall(ball_list[rnd]);
  });

  // 화면이 resize 되었을때 반응할 event
  useEffect(() => {
    const handleResize = () => {
      let box_width = gameBoxRef.current.offsetWidth - 200; //box_ref.current ? box_ref.current.offsetWidth : 0;
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
    setBoxWidth(box_width - 200);
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
              <img
                src={process.env.PUBLIC_URL + `${ball}`}
                className="ball"
                alt={ball}
              />
            </h1>
          )}
        </Motion>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/bowl-pins.png"}
            className="pins"
          />
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
        <ScoreModal open={openModal} setOpen={setOpenModal} />
      </div>
    </>
  );
};

export default StartGame;
