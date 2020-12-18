import React, { useState, useContext } from "react";
import Clock from "react-live-clock";
import { useInterval } from "../modules/userInterval";
import InMemory from "../provider/InMemoryProvider";

function LiveClock(props) {
  const { jwtTimeOut, setJwtTimeOut } = useContext(InMemory);
  const [timeLeft, setTimeLeft] = useState(0); // calculateTimeLeft());

  useInterval(() => {
    setTimeLeft(timeLeft + 1);
    setJwtTimeOut(jwtTimeOut - 1);
  }, 1000);

  return (
    <div>
      <Clock format={"YYYY-MM-DD HH:mm:ss"} ticking={true} timezone={"Asia/Seoul"} />
      <p>{jwtTimeOut}</p>
    </div>
  );
}

export default LiveClock;
