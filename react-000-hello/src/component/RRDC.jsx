import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class RRDC extends Component {
  render() {
    return <div>RRDC:Ract redux </div>;
  }
}

export default connect(mapStateToProps)(RRDC);
