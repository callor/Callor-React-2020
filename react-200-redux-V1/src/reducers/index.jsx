import { INCREMENT, DECREMENT, SET_DIFF } from "../actions";
import { combineReducers } from "redux";

const counterInitialState = {
  value: 0,
  diff: 1,
};

const counter = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + state.diff,
      });
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff,
      });
    case SET_DIFF:
      return Object.assign({}, state, {
        diff: action.diff,
      });
    default:
      return state;
  }
};

/**
 * combineRecucers 메소드는 여러개의 reducer을 하나로 합쳐주는 메소드입니다.
 * 현재 예시는 하나의 reducer만 필요하기 때문에 위와 같이 작성 되었지만,
 * 여러개의 reducer가 있다면, 아래와 같이 작성 하시면 됩니다.
 * const counterApp = combineReducers({
 *      counter,
 *       etc
 * });
 *
 * reducer에 다른 key를 주고 싶다면 아래와 같이 사용하면 됩니다.
 * const counterApp = combineReducers({
 *      a: counter,
 *      b: etc
 * });
 */
const counterApp = combineReducers({
  counter,
});

export default counterApp;
