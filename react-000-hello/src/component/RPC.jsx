import React, { PureComponent } from "react";
import PropTypes from "prop-types";
/**
 * React.PureComponent는 React.Component와 매우 유사하다.
 * 하지만 한 가지 다른 점이 있다면,
 * React의 생명주기 메소드 중 하나인 shouldComponentUpdate를 다루는 방식이 다르다는 것이다.
 *
 * React.PureComponent는 shouldComponentUpdate가 이미 구현되어 있는데,
 * props와 state를 얕은 비교를 통해 비교한 뒤 변경된 것이 있을 때만 리렌더링한다.
 *
 * 즉, React.PureComponent를 사용하면 React애플리케이션 성능을 향상시키는 데 가장 중요한 것 중 하나인
 * shouldComponentUpdate를 신경쓰지 않아도 된다.
 * 하지만 props나 state가 복잡한 데이터 구조를 포함하고 있다면,
 * props와 state를 비교하는 과정에서 의도하지 않은 결과가 발생할 수 있다.
 * (얕은 비교(shallow comparison)와 깊은 비교(deep comparison)의 차이를 알면 무슨 의미인지 알 것이다.)
 */

import { render } from "react-dom";

const root = document.querySelector("#root");
const pTag = document.createElement("p");

const logClosure = () => {
  let clickedCount = 0;
  let reRenderedCount = -1;

  return (isReRendered) => {
    if (isReRendered) {
      reRenderedCount += 1;
    } else {
      clickedCount += 1;
    }

    pTag.textContent = `log -> click count : ${clickedCount} | re-render count : ${reRenderedCount}`;
  };
};

const log = logClosure();

class RPC extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    root.after(pTag);
  }
  handleClick() {
    log(false);

    if (Math.floor(Math.random() * 10) % 2) {
      this.setState({
        counter: this.state.counter + 1,
      });
    } else {
      this.setState({
        counter: this.state.counter,
      });
    }
  }

  render() {
    log(true);
    return (
      <div>
        <h3>RPC:React Pure Component</h3>
        {this.state.counter}
        <br />
        <input type="button" onClick={this.handleClick} value="click" />
      </div>
    );
  }
}

export default RPC;
/**
 * PureComponent vs Component
 * 사용자가 버튼을 클릭하면 카운터가 랜덤하게 증가하는 컴퍼넌트이다.
 * PureComponent와 Component의 차이를 비교하려면, 아래 예제 코드에서 단지 Pure를 지우거나 다시 쓰면 된다.
 * PureComponent를 extends한 컴퍼넌트는 카운터가 증가할 때만 re-render되지만,
 * Component를 extends한 컴퍼넌트는 버튼을 클릭하면 setState가 실행되기 때문에 매 클릭마다 re-render된다는 것을 볼 수 있다.
 * (참고로 PureComponent를 extends한 컴퍼넌트 안에서도 shouldComponentUpdate 메소드를 사용할 수 있다.)
 */
