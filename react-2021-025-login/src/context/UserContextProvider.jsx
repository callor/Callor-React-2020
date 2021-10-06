import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children }) {
    const [user, setUser] = useState();
    const propsData = { user, setUser };
    return (
        <UserContext.Provider value={propsData}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
