import logo from "./logo.svg";
import "./App.css";
import { PhoneContextProvider } from "./context/PhoneContextProvider";

import PhoneMain from "./comps/PhoneBookMain";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <PhoneContextProvider>
                <PhoneMain />
            </PhoneContextProvider>
        </div>
    );
}

export default App;
