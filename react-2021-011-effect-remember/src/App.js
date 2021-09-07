import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./css/write.css";

import MainNav from "./comps/MainNav";
import Home from "./comps/Home";
import About from "./comps/About";
import Remember from "./comps/RemList";

function App() {
    // const insertRemember = useCallback(async () => {
    //     setRemember(rememberList.comcat(remember));
    // }, []);

    // useEffect(() => {
    //     // setRemember(rememberList.concat(remember));
    //     insertRemember();
    //     console.log(rememberList);
    //     return () => {
    //         console.log("clean Up");
    //     };
    // }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <MainNav />
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/remember" component={Remember} />
            </div>
        </BrowserRouter>
    );
}

export default App;
