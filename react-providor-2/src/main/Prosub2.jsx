import React, { Component } from "react";

import MySub from "./Prosub2_1";
import ProMessageContext from "../providor/MessageProvidor";

class Prosub2 extends Component {
  static contextType = ProMessageContext;
  render() {
    return (
      <div>
        <p>Sub 2 에서 수신 : {this.context.message} </p>
        <MySub />
      </div>
    );
  }
}
export default Prosub2;
