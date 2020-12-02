import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

class BBsInsert extends Component {
  state = {
    b_subject: "",
    b_writer: "",
    b_content: "",
  };

  // 키보드로 입력박스에 문자를 입력하면
  // 그 문자를 b_title에 저장하라
  handleChange = (e) => {
    console.log(e.target.value);
    // this.setState({ ...this.state, b_title: e.target.value,b_writer });
    this.setState({ [e.target.name]: e.target.value });
  };

  bbsAxiosSubmit = () => {
    const { bbs_insert_url } = this.props;
    axios
      .post(bbs_insert_url, { b_title: this.state.b_title })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    return false;
  };

  // ajax이용하여 서버에 데이터를 보내기
  bbsInsertSubmit = (e) => {
    /*
    html 에서 a 태그나 submit 태그는 고유의 동작이 있다. 
    페이지를 이동시킨다거나 form 안에 있는 input 등을 전송한다던가 
    그러한 동작이 있는데 e.preventDefault 는 그 동작을 중단시킨다.
    */
    e.preventDefault();

    const { bbs_insert_url } = this.props;

    var formData = new FormData();
    // formData.append("b_subjec", this.state.b_title);
    // console.log("전송", this.state.b_title);

    const bbsData = {
      b_subject: this.state.b_subject,
      b_writer: this.state.b_writer,
      b_content: this.state.b_content,
      b_date: moment().format("YYYY[-]MM[-]DD"),
      b_time: moment().format("HH:mm:ss"),
    };

    fetch(bbs_insert_url, {
      method: "POST",
      mode: "cors", // no-cors, cors, *same-origin
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bbsData),
      // body: formData
    })
      .then((response) => {
        console.log(response.json());
        this.setState({ b_subject: "", b_writer: "", b_content: "" });
      })
      .catch((err) => alert(err));
  };

  render() {
    return (
      <form
        encType="multipart/form-data"
        onSubmit={this.bbsInsertSubmit}
        className="w3-container w3-row-padding"
      >
        <div className="w3-col s2 w3-padding">
          <input
            name="b_writer"
            value={this.state.b_name}
            onChange={this.handleChange}
            className="w3-input w3-border"
            placeholder="작성자"
          />
        </div>

        <div className="w3-col s3 w3-padding">
          <input
            name="b_subject"
            value={this.state.b_subject}
            onChange={this.handleChange}
            className="w3-input w3-border"
            placeholder="제목"
          />
        </div>
        <div className="w3-col s3 w3-padding">
          <input
            name="b_content"
            value={this.state.b_content}
            onChange={this.handleChange}
            className="w3-input w3-border"
            placeholder="내용"
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
