import logo from "./logo.svg";
import "./App.css";
import Google from "./coms/Google";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Google />
        </div>
    );
}

export default App;
