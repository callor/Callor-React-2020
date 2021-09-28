import "./App.css";
import { useReducer } from "react";
import CounterInput from "./comps/CounterInput";
import CounterView from "./comps/CounterView";
import { reducer, initialState } from "./modules/CounterReducer";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <header className="App-header">
                <CounterInput dispatch={dispatch} />
                <CounterView state={state} />
            </header>
        </div>
    );
}

export default App;
