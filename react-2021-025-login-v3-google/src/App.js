import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import GoogleButton from "./custom/GoogleButton";
import GoogleLogoutButton from "./custom/GoogleLogoutButton";

function App() {
    const [googleUser, setGoogleUser] = useState("");
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <GoogleButton
                googleUser={googleUser}
                setGoogleUser={setGoogleUser}
            />
            <GoogleLogoutButton setGoogleUser={setGoogleUser} />
        </div>
    );
}

export default App;
