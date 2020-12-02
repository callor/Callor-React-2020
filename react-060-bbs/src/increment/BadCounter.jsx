import React from "react";
class BadCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
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

export default BadCounter;
