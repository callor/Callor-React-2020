import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./nav/SideBar";
import Recursive from "./nav/Recursive";
import PreventingTransitions from "./nav/PreventingTransitions";
import Auth from "./nav/Auth";
import Nesting from "./nav/Nesting";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Nesting />
            <hr />
            <Auth />
            <hr />
            <Sidebar />
            <hr />
            <Recursive />
            <hr />
            <PreventingTransitions />
        </div>
    );
}

export default App;
