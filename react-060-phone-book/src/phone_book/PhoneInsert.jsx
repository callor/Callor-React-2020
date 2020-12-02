import React, { Component } from "react";
import PropTypes from "prop-types";

class PhoneInsert extends Component {
  state = {
    name: "",
    phone: ""
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  handleChange = e => {
    this.setState({
      /* 계산된 속성명
       속성명을 문자열 리터럴이 아닌 연산식으로 사용할 수 있다
        const name = "callor"
        const {[name] : "홍길동"} 은
        const {"callor" : "홍길동"} 과 같다
     */
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    /* 이벤트 핸들러에서 alert
    ---------------------------*/
    // alert(e.target.className);
    /* e.target : 현재 이벤트가 발생한 태그
    -----------------------------*/

    // 페이지 리로딩 방지
    e.preventDefault();

    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: "",
      phone: ""
    });
    // return false;
  };

  /*
  버튼 type="button"으로 설정하고 callback 으로 설정
  onClick={()=>{onCreate(this.state)}}
  */
  render() {
    const { onCreate } = this.props;
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form-controller"
        data-id="Korea"
      >
        <input
          placeholder="이름을 입력하세요"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />

        <button
          type="button"
          // onClick={() => onCreate(this.state)}
          onClick={this.handleSubmit}
        >
          저장
        </button>
        <div>
          이름 : {this.state.name} 전화번호 : {this.state.phone}
        </div>
      </form>
    );
  }
}

PhoneInsert.propTypes = {};

export default PhoneInsert;
