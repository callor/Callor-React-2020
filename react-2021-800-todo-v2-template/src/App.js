import logo from "./logo.svg";
import "./App.css";
import TodoLayout from "./comps/TodoLayout";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <TodoLayout form={<TodoInput />}>
                <TodoList />
            </TodoLayout>
        </div>
    );
}

export default App;
