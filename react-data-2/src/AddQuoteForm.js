import React, { Component } from "react";
import axios from "axios";
import "./AddQuoteForm.css";

class AddQuoteForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {quote: ''}
  }
  state = {
    b_subject: ""
  };

  handleChange = event =>
    this.setState({ ...this.state, b_subject: event.target.value });

  handleSubmit = event => {
    axios
      .post(this.props.quote_service_url, { b_subject: this.state.b_subject })
      .then(r => console.log(r))
      .catch(e => console.log(e));

    // event.preventDefault();
    return false;
  };

  handleSubmitWithFetch = event => {
    let data = new FormData();
    data.append("b_subject", this.state.b_subject);
    fetch(this.props.quote_service_url, { method: "POST", body: data })
      .then(response => response.json())
      .catch(e => console.log(e));

    event.preventDefault();
  };

  render = () => {
    const { b_subject } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="AddQuote-text"
          type="text"
          // value={this.state.b_subject}
          value={b_subject}
          onChange={this.handleChange}
        />
        <input className="AddQuote-button" type="submit" value="Add Quote" />
      </form>
    );
  };
}

export default AddQuoteForm;
