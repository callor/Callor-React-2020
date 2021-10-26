import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import GoogleButton from "./custom/GoogleButton";
import GoogleLogoutButton from "./custom/GoogleLogoutButton";

function App() {
    const [googleUser, setGoogleUser] = useState("");

    const fetchUser = async () => {
        await window.gapi.auth2.init({
            client_id:
                "914378613858-5h170in8llkq1i3gdh8ugg4bontble3f.apps.googleusercontent.com",
            scope: "profile email",
        });
        if (!window.gapi) return;
        const auth2 = window.gapi.auth2.getAuthInstance();
        const user = auth2.currentUser.get();
        console.log("user", user.getBasicProfile().getEmail());
        setGoogleUser(user);
    };

    useEffect(fetchUser, [fetchUser]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{googleUser.email}</h1>
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
