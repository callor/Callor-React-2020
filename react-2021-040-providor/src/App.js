import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MessageProvidor from "./providor/MessageProvidor";

function App() {
    const [phone, setPhone] = useState({
        p_id: 1,
        p_name: "",
        p_tel: "",
        p_email: "",
    });

    const [phoneBook, setPhoneBook] = useState([]);

    const providorData = {
        phone,
        setPhone,
        phoneBook,
        setPhoneBook,
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <MessageProvidor.Provider
                value={providorData}
            ></MessageProvidor.Provider>
        </div>
    );
}

export default App;
