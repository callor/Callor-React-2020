import logo from "./logo.svg";
import "./App.css";
import { PhoneContextProvider } from "./context/PhoneContextProvider";
import { BrowserRouter } from "react-router-dom";

import PhoneMain from "./comps/PhoneBookMain";
import MainNav from "./comps/MainNav";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <BrowserRouter>
                <MainNav />
                <PhoneContextProvider>
                    <PhoneMain />
                </PhoneContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
