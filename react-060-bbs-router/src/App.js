import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BBsMain from "./bbs/BBsMain";
import BBsWrite from "./bbs/BBsWrite";
import MainNav from "./MainNav";
import socketio from "socket.io-client";
import { useEffect } from "react";

function App() {
  const socket = socketio("http://localhost:5000", {
    transports: ["websocket"],
    upgrade: false,
    // path: "/", // added this line of code
  });
  socket.on("insert", (data) => {
    console.log(data);
  });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.emit("init", "Hello");

    socket.on("event", (data) => {
      console.log(data);
    });
  });

  const header_style = {
    marginBottom: 0,
    backgroundColor: "green",
    color: "white",
  };
  return (
    <div className="container-fluid">
      <header style={header_style} className="jumbotron text-center">
        <h2>MY BBS 2020</h2>
        <p>React &amp; Spring Boot BBS</p>
      </header>
      <Router>
        <MainNav />
        <Route exact path="/" component={BBsMain} />
        <Route path="/bbsWrite" component={BBsWrite} />
      </Router>
    </div>
  );
}

export default App;
