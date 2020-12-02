import React, { memo } from "react";

/**
 * React.memo는 훅스은 아니고 클래스형 컴포넌트에서 사용되던 PureComponent의 함수형 버전이라고 보면 된다
 *
 * hooks나 memo가 생겨나게 된 배경에는 참조(refence)라는 개념이 있다고 생각한다.
 * reference 개념을 설명하는 간단명료한 자료를 첨부해서 보자면
 * pass by reference는 한쪽에 커피를 채우면 다른 한쪽에도 동일한 커피가 채워진다.
 * 컵은 2개이나 동일한 내부 값을 공유하고 있는 것이다.
 *
 * 이와 달리 pass by value는 '실제로 새로운 컵이 생겨난 것이기 때문에'
 * 한쪽에 커피를 채워도 다른 한쪽에 동일하게 커피가 채워지지 않는 것을 확인할 수 있다.
 * 전자를 얕은 복사(shallow copy), 후자를 깊은 복사(deep copy)라 한다.
 *
 * 간단히 말하자면 같은 참조 값인가?란 같은 메모리에 할당된 값을 사용하는가?와 동일한 질문인 것 같다.
 */
const RSCM = memo(() => {
  return (
    <div>
      <h3>RSCM:React Memo</h3>
    </div>
  );
});

export default RSCM;
