import { useTotoContext } from "../context/AppContextProvider";
import TodoItem from "./TodoItem";

function TodoList() {
    const { todoList } = useTotoContext();
    const viewList = todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.t_id} />;
    });
    return <div>{viewList}</div>;
}

export default TodoList;
