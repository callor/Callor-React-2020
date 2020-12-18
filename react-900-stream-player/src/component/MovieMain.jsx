import { useEffect, useState } from "react";
import InMemory from "../provider/InMemoryProvider";

// import components
// import { GetJwtToken, LiveClock, TimeTicker, TokenRenewal } from "./container";
import { LiveClock, TokenRenewal } from "../container";

function MovieMain(props) {
  /**
   * 마우스, 키보드 움직임이 없을 경우
   * 타이머를 카운트하여 서버로 부터 다시 Token을 강제로 가져오도록 한다.
   * 화면(view)가 열린 상태에서 마우스 움직임이 없을 경우 Token의 유효기간이 만료되어
   * 로그아웃이 되는 현상을 방지하기 위함이다
   * 테스트를 위하여 10초로 설정해 두었다
   */
  const SET_TIME_OUT = 10;

  /**
   *
   * JS의 event 핸들러들 등록하여
   * 마우스, 키보드 움직임이 있으면 time out을 초기화 한다.
   * jwtTimeOut값이 0 미만이 되면
   * 서버에 Token Renewal을 요청한다.
   *
   */
  useEffect(() => {
    document.addEventListener("mousemove", () => {
      setJwtTimeOut(SET_TIME_OUT);
    });
    document.addEventListener("keydown", () => {
      setJwtTimeOut(SET_TIME_OUT);
    });
  }, []);

  const [jwtTimeOut, setJwtTimeOut] = useState(SET_TIME_OUT);
  const [jwtToken, setJwtToKen] = useState("");
  const providorValue = { SET_TIME_OUT, jwtToken, setJwtToKen, jwtTimeOut, setJwtTimeOut };

  return (
    <div>
      <InMemory.Provider value={providorValue}>
        <header className="App-header">
          <h1>Callor Media Streamming Player</h1>
          <p>
            <LiveClock />
          </p>
        </header>
        <TokenRenewal />
      </InMemory.Provider>
    </div>
  );
}

export default MovieMain;
