import React, { Component } from "react";
import PhoneView from "./PhoneView";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
  };

  /*
  PhoneMain.jsx가 바뀌면 다시 렌더링을 시도한다
  이때 바뀐 값이 있는지 없는지 검사하여
  리스트를 다시 갱신 할 것인지를 판단하도록 한다
  */
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map((info) => (
      <PhoneView
        key={info.id}
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    ));

    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
