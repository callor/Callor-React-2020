import { useTotoContext } from "../context/AppContextProvider";
import "../css/TodoInput.css";

function TodoInput() {
    const { inputId, todo, onChange, onKeyPress, onClick } = useTotoContext();
    return (
        <div className="form">
            <input
                ref={inputId}
                value={todo.t_text}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <div className="insert-button" onClick={onClick}>
                추가
            </div>
        </div>
    );
}

export default TodoInput;
