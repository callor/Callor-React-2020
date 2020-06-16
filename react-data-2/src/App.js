import React, { Component } from "react";
import QuoteList from "./BBsList";
import AddQuoteForm from "./AddQuoteForm";
import axios from "axios";
import "./App.css";

const QUOTE_FETCH_URL = "http://localhost:5000/bbs/rest";
const QUOTE_INSERT_URL = "http://localhost:5000/bbs/insert";

class App extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      isFetching: false,
      bbsList: []
    };
  }
  render() {
    const title = "Quotes for ya!";
    return (
      <div className="App">
        <h2 className="App-title">{title}</h2>
        <p>{this.state.isFetching ? "데이터 가져오는중..." : "완료~~"}</p>
        <QuoteList quotes={this.state.bbsList} />
        <AddQuoteForm quote_service_url={QUOTE_INSERT_URL} />
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return this.props.bbsList !== nextProps.todoList;
    return true;
  }

  componentDidMount() {
    this.fetchQuotes();
    this.timer = setInterval(() => this.fetchQuotes(), 10000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  fetchQuotes = () => {
    this.setState({ ...this.state, isFetching: true });
    axios
      .get(QUOTE_FETCH_URL)
      .then(response => {
        console.log(response);
        if (response.status === 200)
          this.setState({ bbsList: response.data, isFetching: false });
      })
      .catch(e => console.log(e));
  };

  fetchQuotesWithFetch = () => {
    this.setState({ ...this.state, isFetching: true });
    console.log("fetch");
    fetch(QUOTE_FETCH_URL)
      .then(response => response.json())
      .then(result => this.setState({ bbsList: result, isFetching: false }))
      .catch(e => console.log(e));
  };
}

export default App;
