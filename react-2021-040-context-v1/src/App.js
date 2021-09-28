import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MessageContext from "./context/MessageContext";
import MessageMain from "./context/MessageMain";

function App() {
    const [message, setMessage] = useState("전달");
    const [isEdit, setEdit] = useState(false);
    // Provider에 JSON객체 type으로 묶어서 전달할 것
    const providorData = {
        message,
        setMessage,
        isEdit,
        setEdit,
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <MessageContext.Provider value={providorData}>
                <MessageMain />
            </MessageContext.Provider>
        </div>
    );
}

export default App;
