import { useRef } from "react";

function TodoInput(props) {
    const { todo, setTodo, todoList, setTodoList } = props;

    // 입력박스에 text를 입력하면 한개의 TODO데이터 만들기
    const onChangeHandler = async (e) => {
        await setTodo({
            ...todo,
            t_text: e.target.value,
            t_id: todoList.length,
            t_date: Date().toString(),
        });
    };

    const inputRef = useRef();
    const todoInsert = () => {
        setTodoList([...todoList, todo]);
        setTodo({ ...todo, t_text: "" });

        // inputRef.current.target.value = "";
    };

    return (
        <div className="toto_input_box">
            <input
                placeholder="할일 입력"
                className="todo_text"
                value={todo.t_text}
                ref={inputRef}
                onChange={onChangeHandler}
            />
            <button className="btn_toto_insert" onClick={todoInsert}>
                추가
            </button>
        </div>
    );
}

export default TodoInput;
