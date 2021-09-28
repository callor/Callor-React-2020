import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MessageUpdate from "./comps/MessageUpdate";
import MessageView from "./comps/MessageView";
import MessageProvidor from "./providor/MessageProvidor";

function App() {
    const [phone, setPhone] = useState({
        p_id: 1,
        p_name: "",
        p_tel: "",
        p_email: "",
    });

    const [phoneBook, setPhoneBook] = useState([]);

    const [message, setMessage] = useState("전달");
    const [isEdit, setEdit] = useState(false);
    // Provider에 JSON객체 type으로 묶어서 전달할 것
    const providorData = {
        phone,
        setPhone,
        phoneBook,
        setPhoneBook,
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
            <MessageProvidor.Provider value={providorData}>
                <MessageUpdate />
                <MessageView />
            </MessageProvidor.Provider>
        </div>
    );
}

export default App;
