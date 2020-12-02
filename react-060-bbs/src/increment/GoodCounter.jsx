import React from "react";

class GoodCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }

  // 클래스에서 함수를 선언할때는 화살표 함수를 사용한다.
  es6callbackfunction = (prevSate, props) => ({
    count: prevSate.count + 1,
  });

  // return은 count를 객체로 리턴한다
  // 때문에 {} 로 묶어야 한다.
  es5callbackfunction(prevSate, props) {
    return {
      count: prevSate.count + 1,
    };
  }

  incrementCount() {
    this.setState(this.es6callbackfunction);
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Increment</button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default GoodCounter;
