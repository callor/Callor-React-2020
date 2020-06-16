import React, { Component } from "react";
import ProList from "./ProList";
import ProList2 from "./ProList2";
import ProList_use from "./ProList_useContext";
import Prosub2 from "./Prosub2";
import ProMessageContext from "../providor/MessageProvidor";

class ProMain extends Component {
  state = {
    message: "전달!!!",
    sendMessage: message => this.sendMessage(message)
  };

  sendMessage = message => {
    this.setState({ message: message });
  };

  render() {
    return (
      <div>
        <p>main에서 : {this.state.message}</p>
        <ProMessageContext.Provider value={this.state}>
          
          <ProList />
          <ProList2 />
          <ProList_use />
          <Prosub2 />
          
        </ProMessageContext.Provider>
      </div>
    );
  }
}

export default ProMain;
