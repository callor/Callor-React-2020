import React, { useState, useEffect, useRef } from "react";
import { Motion, spring } from "react-motion";
import ScoreTable from "../componet/ScoreTable";
import ScoreModal from "../componet/SocreModal";
import "../css/StartGame.css";
import gameScore from "../script/gameScore";

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

const StartGame = ({ playerList, setPlayerList }) => {
  const scoreBoardList = playerList.map((player) => {
    return <ScoreTable key={player.id} player={player} />;
  });

  /**
   * 게임 stage UI 변수들
   */
  const [ball, setBall] = useState("/balls/bowl_ball (1).png");

  const [openModal, setOpenModal] = useState(false);

  const [boxWidth, setBoxWidth] = useState(-100);
  const [left, setLeft] = useState(0);

  const gameBoxRef = useRef(null);
  const [rollPins, setRollPins] = useState(0);
  const [rollMessage, setRollMessage] = useState("Strike!!");
  const [playerName, setPlayerName] = useState("");

  const playerIndex = useRef(0);

  //  useResize(gameBoxRef);
  const btn_ready = (e) => {
    setLeft(0);
  };

  const btn_rolling = async (e) => {
    // alert("Game Start!! : " + boxWidth);
    // console.log("box-width", boxWidth);
    setLeft(+boxWidth);
    const timeoutPopup = (delay) => {
      return new Promise((res) => setTimeout(res, delay));
    };
    await timeoutPopup(1000); //1초 기다리기

    let roll_pins = Math.floor(Math.random() * 12);
    roll_pins = roll_pins >= 10 ? 10 : roll_pins;
    setRollPins(roll_pins);
    setRollMessage(
      roll_pins >= 10
        ? "Strike!!!"
        : roll_pins >= 5
        ? "Nice pitch"
        : roll_pins === 0
        ? "Gutter"
        : "Opps!!"
    );

    // 현재 게임중인 플레이어 객체
    const thisPlayer = playerList[playerIndex.current];

    // 몇번째 pitch 인가
    const pitchPoint = thisPlayer.pitchs.length;
    if (pitchPoint > 10) alert("Game Over!!!");

    // 점수를 추가
    const pitchs = [...thisPlayer.pitchs, roll_pins];
    // 현재 플레이어 객체에 점수 리스트 추가
    const player = { ...thisPlayer, pitchs: pitchs };

    // 현재 게임중인 플레이어 정보 갱신
    setPlayerList([
      ...playerList.slice(0, playerIndex.current),
      player,
      ...playerList.slice(playerIndex.current + 1),
    ]);

    setOpenModal(true);
    setLeft(0);
    gameScore();
  };

  useEffect(() => {
    playerIndex.current = 0;
    const thisPlayer = playerList[playerIndex.current].playerName;

    // 현재 게임중인 플레이어 이름보이기
    setPlayerName(thisPlayer.playerName);
  }, [playerList]);

  // ball 이미지를 랜덤으로
  useEffect(() => {
    const rnd = Math.floor(Math.random() * 19);
    console.log("random", rnd);
    setBall(ball_list[rnd]);
  }, []);

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
  }, [gameBoxRef]);

  return (
    <>
      {scoreBoardList}
      <br />
      <br />
      <br />
      <br />
      <div>{playerName}...rolling...</div>
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
            alt="bowl_pins"
          />
        </div>
      </div>
      <br />
      <div>
        <button className="reset" onClick={btn_ready}>
          Ready !!
        </button>

        <button className="roll" onClick={btn_rolling}>
          GO{"  "} !!
        </button>
        <ScoreModal
          open={openModal}
          setOpen={setOpenModal}
          roll_pins={rollPins}
          roll_message={rollMessage}
        />
      </div>
    </>
  );
};

export default StartGame;
