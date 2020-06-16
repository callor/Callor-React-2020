import React, { Component } from "react";

class BBsListItem extends Component {
  state = {
    editing: false
  };
  //    true -> false, false -> true
  handleToggleEdit = () => {
    alert("toggle");
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  render() {
    const { bbs, key } = this.props;
    const { editing } = this.state;
    if (editing) {
      return (
        <tr key={key}>
          <td>
            <input value={bbs.b_date} />
          </td>
          <td>
            <input value={bbs.b_time} />
          </td>
          <td>
            <input value={bbs.b_subject} />
          </td>
          <td>
            <button onClick={this.handleToggleEdit}>view</button>
          </td>
        </tr>
      );
    }

    return (
      <tr key={bbs._id}>
        <td>{bbs.b_date}</td>
        <td>{bbs.b_time}</td>
        <td>{bbs.b_subject}</td>
        <td>
          <button onClick={this.handleToggleEdit}>view</button>
        </td>
      </tr>
    );
  }
}

export default BBsListItem;
