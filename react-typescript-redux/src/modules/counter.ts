// 액션 type 선언
// 여기서의 "type"은 TypeScript의 type을 의미하는게 아니라 리덕스 액션 안에 들어가게 될 type값 이다.
// type을 선언 할 때에는 다음과 같이 문자열 뒤에 as const 라는 키워드를 붙여준다.
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

// 액션 생성 함수 선언
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

// 액션 객체들에 대한 type 준비하기
// 나중에 우리가 리듀서를 작성 할 때
// action 파라미터의 타입을 설정하기 위해서
// 우리가 만든 모든 액션들의 TypeScript 타입을 준비해주어야 한다
// 여기서 사용 된 ReturnType 은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입이다.
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// 상태의 타입과 상태의 초깃값 선언하기
// counter 모듈에서 관리할 상태의 타입과 상태의 초깃값을 선언

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

// 리듀서 작성하기
// 리듀서를 작성하고 내보내 준다
// 리듀서를 작성 하는 것은,
// useReducer의 사용법과 같다
// 함수의 반환 타입에 상태의 타입을 넣는 것을 잊지 않는다.
// 이를 통하여 사소한 실수를 방지 할 수 있다.

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
