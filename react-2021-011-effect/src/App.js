import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Home from "./comps/Home";
import About from "./comps/About";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <ul className="main_menu">
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li>
                        <Link to="/about">어바웃</Link>
                    </li>
                    <li className="search_box">
                        <input
                            name="search"
                            type="search"
                            placeholder="검색어를 입력하세요"
                        />
                    </li>
                </ul>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
            </div>
        </BrowserRouter>
    );
}

export default App;
