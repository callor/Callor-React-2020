export const reducer = (state, action) => {
    switch (action.type) {
        case "증가":
            return { count: state.count + 1 };
        case "감소":
            return { count: state.count - 1 };
        default:
            // throw new Error();
            return state;
    }
};

export const initialState = { count: 0 };
