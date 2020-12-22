import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, MovieMain, MainNav } from "./component";

function App() {
  return (
    <>
      <Header />
      <Router>
        <MainNav />
        <Switch>
          <Route path="/about">
            <p>about</p>
          </Route>
          <Route exact path="/">
            <MovieMain />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
