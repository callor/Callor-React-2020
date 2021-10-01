import { useTotoContext } from "../context/AppContextProvider";
import "../css/TodoInput.css";

function TodoInput() {
    const { todo, onChange, onKeyPress, todoInsert } = useTotoContext();
    return (
        <div className="form">
            <input
                value={todo.t_text}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <div className="insert-button" onClick={todoInsert}>
                추가
            </div>
        </div>
    );
}

export default TodoInput;
