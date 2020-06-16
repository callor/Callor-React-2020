import React, { Component } from "react";
import PropTypes from "prop-types";

const MessageProvidor = React.createContext({
  message: "",
  sendMessage: message => {}
});

export default MessageProvidor;
