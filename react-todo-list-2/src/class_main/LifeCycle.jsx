import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoList extends Component {
  // 1. 생성자 단한번만 실행
  constructor(props) {
    super(props);
  }

  // 2. React엘리먼트를 실제 DOM 노드에 추가하기 직전 호출
  // v17 이후 사용불가
  componentWillMount() {}

  // 4. 컴포넌트가 만들어지고 render가 호출된 후 실행
  // ajax나 타이머를 생성하는 코드 작성하는 부분
  componentDidMount() {}

  // 5. 컴포넌트 생성 후 첫 렌더링을 마친 후 호출
  // 컴포넌트가 처음 마운트 될때는 실행 되지 않는다
  // props를 받아서 state를 변경해야 하는 경우 사용
  // 내부에서 setState()를 사용해소 추가 렌더링이 발생하지 않는다
  // v17이후 사용불가
  componentWillReceiveProps(nextProps) {}

  // 컴포넌트 업데이트 직전에 호출
  // props, state가 변경되었을때, return 값으로 재 렌더링 결정
  // return true
  shouldComponentUpdate(nextProps, nextState) {}

  // shouldComponentUpdate 호출 후 컴포넌트 업데이트 직전에 호출
  // 새로운 props, state가 반영되지 직전 새로운 값을 받는다
  // 이 메서드 내에서 setState() 사용하면 무한루프에 빠지므로 절대 사용금지
  // v17  이후 사용불가
  componentWillUpdate(nextProps, nextState) {}

  // 컴포넌트 업데이트 직후 후출
  componentDidUpdate(prevProps, prevState) {}

  // 컴포넌트 소멸시점에 실행
  componentWillUnmount() {}

  // 3. 렌더링 할때
  render() {
    return <div></div>;
  }
}

TodoList.propTypes = {};

export default TodoList;
