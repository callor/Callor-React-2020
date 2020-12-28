import "./App.css";
import Background from "./background.jpg";
import BucketMain from "./main/BucketMain";
// import socketio from "socket.io-client";
// import { useEffect } from "react";

function App() {
  // const socket = socketio("http://localhost:12700", {
  //   transports: ["websocket"],
  //   path: "/", // added this line of code
  // });

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("connected");
  //   });
  //   socket.emit("init", "Hello");

  //   socket.on("event", (data) => {
  //     console.log(data);
  //   });
  // });

  const background = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "100% 100vh",
  };
  return (
    <div className="App">
      <header className="App-header" style={background}>
        <h2>MY BUCKET LIST</h2>
      </header>
      <BucketMain />
      <footer className="footer">
        <address>CopyRight &copy; callor@callor.com</address>
      </footer>
    </div>
  );
}

export default App;