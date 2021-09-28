export const countActiveUsers = (users) => {
    console.log("활성 사용자 수를 세는중...");
    return users.filter((user) => user.active).length;
};
export const initialState = {
    inputs: {
        username: "",
        email: "",
    },
    users: [
        {
            id: 1,
            username: "velopert",
            email: "public.velopert@gmail.com",
            active: true,
        },
        {
            id: 2,
            username: "tester",
            email: "tester@example.com",
            active: false,
        },
        {
            id: 3,
            username: "liz",
            email: "liz@example.com",
            active: false,
        },
    ],
};
export const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value,
                },
            };
        case "CREATE_USER":
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user),
            };
        case "TOGGLE_USER":
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.id
                        ? { ...user, active: !user.active }
                        : user
                ),
            };
        case "REMOVE_USER":
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.id),
            };
        default:
            return state;
    }
};
