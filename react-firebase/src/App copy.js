import React from "react";

import { fire } from "./config/FirebaseConfig";

export default class App extends Component {
  constructor() {
    super();
    fire();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <FirstPage memo={memo} />} />
          <Route path="/second" component={SecondPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
