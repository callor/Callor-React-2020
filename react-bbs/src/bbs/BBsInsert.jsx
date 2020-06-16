import React, { Component } from "react";
import axios from "axios";

class BBsInsert extends Component {
  state = {
    b_title: ""
  };

  // 키보드로 입력박스에 문자를 입력하면
  // 그 문자를 b_title에 저장하라
  handleChange = e => {
    console.log(e.target.value);
    this.setState({ ...this.state, b_title: e.target.value });
    console.log("B_TITLE", this.state.b_title);
  };

  bbsAxiosSubmit = () => {
    const { bbs_insert_url } = this.props;
    axios
      .post(bbs_insert_url, { b_title: this.state.b_title })
      .then(result => console.log(result))
      .catch(err => console.log(err));
    return false;
  };

  // ajax이용하여 서버에 데이터를 보내기
  bbsInsertSubmit = e => {
    /*
    html 에서 a 태그나 submit 태그는 고유의 동작이 있다. 
    페이지를 이동시킨다거나 form 안에 있는 input 등을 전송한다던가 
    그러한 동작이 있는데 e.preventDefault 는 그 동작을 중단시킨다.
    */
    e.preventDefault();

    const { bbs_insert_url } = this.props;

    var formData = new FormData();
    formData.append("b_subjec", this.state.b_title);

    console.log("전송", this.state.b_title);

    fetch(bbs_insert_url, {
      method: "POST",
      mode: "cors", // no-cors, cors, *same-origin
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ b_subject: this.state.b_title })
      // body: formData
    })
      .then(response => {
        console.log(response.json());
        this.setState({ b_title: "" });
      })
      .catch(e => alert(e));
  };

  render() {
    return (
      <form
        encType="multipart/form-data"
        onSubmit={this.bbsInsertSubmit}
        className="w3-container w3-row-padding"
      >
        <div className="w3-col s9 w3-padding">
          <input
            value={this.state.b_title}
            onChange={this.handleChange}
            className="w3-input w3-border"
          />
        </div>
        <div className="w3-col s3 w3-padding">
          <button className="w3-button w3-blue">저장</button>
        </div>
      </form>
    );
  }
}

export default BBsInsert;
