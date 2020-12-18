/**
 *
 * react 프로젝트에서 setInterval을 사용할때 발생하는 여러 문제점들을 개선한
 * Custom interval 함수
 *
 * 사용법
 *
 *    import {useInteval} from "userInterval.js"
 *    useInternal(callback,delay)
 *
 * 원본 출처 : https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 *
 */

import { useEffect, useRef } from "react";
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
