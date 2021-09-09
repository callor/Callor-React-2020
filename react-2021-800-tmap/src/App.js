import logo from "./logo.svg";
import "./App.css";
import TMap from "./comps/TMap";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <TMap />
        </div>
    );
}

export default App;
