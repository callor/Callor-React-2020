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
        backgroundAttachment: "scroll",
        backgroundSize: "contain",
    };
    return (
        <div className="App">
            <header className="App-header" style={background}>
                <h1>MY BUCKET LIST</h1>
            </header>
            <BucketMain />
            <footer className="footer">
                <address>CopyRight &copy; callor@callor.com</address>
            </footer>
        </div>
    );
}

export default App;
