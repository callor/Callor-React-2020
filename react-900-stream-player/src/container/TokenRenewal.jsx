import React, { useCallback, useContext, useEffect } from "react";
import InMemory from "../provider/InMemoryProvider";

/**
 * 만료시간이 있는 JWT(JSON Web Token)를
 * 정해진 시간마다 한번씩 Renewal을 요청한다.
 *
 * 앱을 사용하고 있는 동안 Token이 만료되어 로그아웃 되는 것을 방지하고
 * 일정시간동안 앱을 사용하지 않을 경우(마우스 등 반응이 없을 경우)
 * 로그아웃을 하도록 하기 위함이다
 *
 */
function TokenRenewal(props) {
  const { SET_TIME_OUT, jwtToken, setJwtToKen, jwtTimeOut, setJwtTimeOut } = useContext(InMemory);
  const toKenRenewalFetch = useCallback(() => {
    console.log("toKenRenewalFetch");
    fetch("./")
      .then((result) => {
        const date = new Date();
        setJwtToKen(date.toString());
        setJwtTimeOut(SET_TIME_OUT);
      })
      .catch((err) => console.log(err));
  }, [SET_TIME_OUT, setJwtTimeOut, setJwtToKen]); // JS, React 오류는 아니지만 eslint (eslint-plugin-react-hooks) 경고를 없애기 위한 조치 ㅠ

  useEffect(() => {
    if (jwtTimeOut < 0) {
      console.log("ReNewal");
      toKenRenewalFetch();
    }
  }, [jwtTimeOut, toKenRenewalFetch]);
  return <div>{jwtToken}</div>;
}

export default TokenRenewal;
