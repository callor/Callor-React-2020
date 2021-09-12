import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    BBsMain,
    BBsDetail,
    BBsDelete,
    Footer,
    Header,
    MainNav,
    GoogleLogin,
} from "./comps";
import BBsWrite from "./comps/BBsWrite";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <MainNav />
                <section className="main_section">
                    <Route exact path="/" component={BBsMain} />
                    <Switch>
                        <Route exact path="/write/:id" component={BBsWrite} />
                        <Route exact path="/write" component={BBsWrite} />
                        <Route exact path="/detail/:id" component={BBsDetail} />
                        <Route exact path="/delete/:id" component={BBsDelete} />
                    </Switch>
                    <Route exact path="/login" component={GoogleLogin} />
                </section>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
