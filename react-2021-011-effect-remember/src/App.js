import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./css/write.css";

import MainNav from "./comps/MainNav";
import Home from "./comps/Home";
import About from "./comps/About";
import Remember from "./comps/RemList";
import pageNotFound from "./comps/pageNotFound";

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
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/remember" component={Remember} />
                    <Route exact component={pageNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
