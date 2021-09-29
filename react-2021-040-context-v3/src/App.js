import logo from "./logo.svg";
import "./App.css";
import { BookContextProvider } from "./context/ContextProvider";
import { BrowserRouter } from "react-router-dom";

import BookMain from "./comps/BookMain";
import MainNav from "./comps/MainNav";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <BrowserRouter>
                <MainNav />
                <BookContextProvider>
                    <BookMain />
                </BookContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
