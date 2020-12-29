// eslint-disable-next-line
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Counter, Button, Option } from "./component";
import counterApp from "./reducers";

// redux를 사용하여 store 생성
const store = createStore(counterApp);

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Counter />
          <Option />
          <Button />
        </header>
      </div>
    </Provider>
  );
}

export default App;
