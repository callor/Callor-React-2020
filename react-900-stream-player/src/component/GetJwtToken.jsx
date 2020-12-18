import React, { useState } from "react";
import { useInterval } from "../modules/userInterval";

/**
 * 일정 시간마다 한번씩 서버에 요청하여 token을 가져와서 보여준다
 */
function GetJwtToken() {
  const [oldToken, setOldToken] = useState("");
  const [newToken, setNewToken] = useState("");
  useInterval(() => {
    setOldToken(newToken);
    setNewToken("");
  }, 2000);

  return (
    <div>
      <h3>기존 : {oldToken}</h3>
      <h3>새로받은 : {newToken}</h3>
    </div>
  );
}

export default GetJwtToken;
