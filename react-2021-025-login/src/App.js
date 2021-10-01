import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./comps/LoginForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <LoginForm />
        </div>
    );
}

export default App;
