import { useTotoContext } from "../context/AppContextProvider";
import "../css/TodoItem.css";

function TodoItem({ todo }) {
    const id = todo.t_id;
    const checked = todo.t_isComplete;
    const text = todo.t_text;
    const { completeToggle, todoDelete } = useTotoContext();
    return (
        <div className="todo-item" onClick={() => completeToggle(id)}>
            <div
                className="remove"
                onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    todoDelete(id);
                }}
            >
                &times;
            </div>
            <div className={`todo-text ${checked && "checked"}`}>
                <div>{text}</div>
            </div>
            {checked && <div className="check-mark">&#x2713;</div>}
        </div>
    );
}

export default TodoItem;
