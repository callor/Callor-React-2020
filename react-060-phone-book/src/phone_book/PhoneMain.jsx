import React, { Component } from "react";
import PropTypes from "prop-types";
import PhoneInsert from "./PhoneInsert";
import PhonViewList from "./PhonViewList";
import PhoneInfoList from "./PhonViewList";

class PhoneMain extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "김민준",
        phone: "010-0000-0000"
      },
      {
        id: 1,
        name: "홍길동",
        phone: "010-0000-0001"
      }
    ]
  };

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  // v17과 IE에서 사용불가 다른 대안 찾기
  // componentWillMount() {
  //   const information = localStorage.information;
  //   if (information) {
  //     this.setState({
  //       information: JSON.parse(information)
  //     });
  //   }
  // }
  // 로컬 스토리지에 저장된 데이터 읽어 오기
  componentDidMount() {
    const information = localStorage.information;
    if (information) {
      this.setState({
        information: JSON.parse(information)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevState.information) !==
      JSON.stringify(this.state.information)
    ) {
      localStorage.information = JSON.stringify(this.state.information);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleCreate = data => {
    // alert(data.name);
    console.log(data.name, data.phone);
    const { information } = this.state;
    this.setState({
      // data에는 name과 phone이 담겨 있으므로 한번에 추가 !!
      information: information.concat({ id: this.id++, ...data })
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info =>
          id === info.id
            ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
            : info // 기존의 값을 그대로 유지
      )
    });
  };

  render() {
    return (
      <div>
        <PhoneInsert onCreate={this.handleCreate} />
        <PhoneInfoList
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

PhoneMain.propTypes = {};

export default PhoneMain;
