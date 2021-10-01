import { useTotoContext } from "../context/AppContextProvider";
import "../css/TodoItem.css";

function TodoItem({ todo }) {
    const id = todo.t_id;
    const checked = todo.t_isComplete;
    const text = todo.t_text;

    const { onCompleteClick, onDeleteClick } = useTotoContext();
    return (
        <div
            className="todo-item"
            onClickCapture={onCompleteClick}
            data-id={id}
        >
            <div className="remove" onClickCapture={onDeleteClick} data-id={id}>
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
