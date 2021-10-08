import logo from "./logo.svg";
import "./App.css";
import GoogleButton from "./custom/GoogleButton";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <GoogleButton />
        </div>
    );
}

export default App;
