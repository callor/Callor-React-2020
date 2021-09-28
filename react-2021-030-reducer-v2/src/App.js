import "./App.css";
import { useCallback, useMemo, useReducer, useRef } from "react";
import { initialState, reducer, countActiveUsers } from "./modules/UserReducer";
import UserList from "./comps/UserList";
import CreateUser from "./comps/CreateUser";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const nextId = useRef(4);

    const { users } = state;
    const { username, email } = state.inputs;

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({
            type: "CHANGE_INPUT",
            name,
            value,
        });
    }, []);

    const onCreate = useCallback(() => {
        dispatch({
            type: "CREATE_USER",
            user: {
                id: nextId.current,
                username,
                email,
            },
        });
        nextId.current += 1;
    }, [username, email]);

    const onToggle = useCallback((id) => {
        dispatch({
            type: "TOGGLE_USER",
            id,
        });
    }, []);

    const onRemove = useCallback((id) => {
        dispatch({
            type: "REMOVE_USER",
            id,
        });
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
            <div>활성사용자 수 : {count}</div>
        </>
    );
}

export default App;
