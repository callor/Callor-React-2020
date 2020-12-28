import "./App.css";
import { Counter, Button, Option } from "./component";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Counter store={props.store} />
        <Option store={props.store} />
        <Button store={props.store} />
      </header>
    </div>
  );
}

export default App;
