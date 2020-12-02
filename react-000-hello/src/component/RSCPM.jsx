import React, { memo } from "react";
import PropTypes from "prop-types";

/**
 * memoized 구현 컴포넌트
 * React.memo()는 props 혹은 props의 객체를 비교할 때 얕은(shallow) 비교를 한다.
 *
 * React는 먼저 컴퍼넌트를 렌더링(rendering) 한 뒤,
 * 이전 렌더된 결과와 비교하여 DOM 업데이트를 결정한다.
 * 만약 렌더 결과가 이전과 다르다면, React는 DOM을 업데이트한다.
 *
 * 다음 렌더링 결과와 이전 결과의 비교는 빠르다.
 * 하지만 어떤 상황에서는 이 과정의 속도를 좀 더 높일 수 있다.
 *
 * 컴퍼넌트가 React.memo()로 래핑 될 때,
 * React는 컴퍼넌트를 렌더링하고 결과를 메모이징(Memoizing)한다.
 * 그리고 다음 렌더링이 일어날 때 props가 같다면,
 * React는 메모이징(Memoizing)된 내용을 재사용한다.
 */
const RSCPM = memo((props) => {
  return (
    <div>
      <h3>RSCPM:React Memo Props</h3>
    </div>
  );
});

RSCPM.propTypes = {};

export default RSCPM;
