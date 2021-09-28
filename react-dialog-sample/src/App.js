import logo from "./logo.svg";
import "./App.css";
import SignUpDialog from "./comps/SignUpDialog";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <SignUpDialog />
        </div>
    );
}

export default App;
