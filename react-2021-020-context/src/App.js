import React, { useContext } from "react";

import { UserContext, UserContextProvider } from "../context/UserContext";

const App = () => {
    return (
        <UserContextProvider>
            <Page />
        </UserContextProvider>
    );
};

const Page = () => {
    // access the context value
    const user = useUserContextState();

    if (user?.login?.username) {
        return <p>You are logged in as {user?.login.username}</p>;
    } else {
        return <p>You are not logged in</p>;
    }
};

export default App;
