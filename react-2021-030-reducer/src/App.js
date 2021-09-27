import "./App.css";
import { useReducer } from "react";
import CounterInput from "./comps/CounterInput";
import CounterView from "./comps/CounterView";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "증가":
            return { count: state.count + 1 };
        case "감소":
            return { count: state.count - 1 };
        default:
            // throw new Error();
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <header className="App-header">
                <CounterInput state={state} dispatch={dispatch} />
                <CounterView state={state} />
            </header>
        </div>
    );
}

export default App;
