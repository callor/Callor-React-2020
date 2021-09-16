/**
 * 이 예에서 컨텍스트는 로그인한 사용자 개체를 앱에 제공하는 데 사용됩니다.
 * 그런 다음 이 컨텍스트는 사용자 값에 따라 조건부로 렌더링하는 Page 구성 요소에서 사용됩니다.
 * 이것은 실제 React 애플리케이션에서 매우 일반적인 사용 사례입니다. 개선할 수 있는 방법을 살펴보겠습니다.
 */
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
} from "react";

// create contexts
const UserContextState = createContext();
const UserContextUpdater = createContext();

// context consumer hook
const useUserContextState = () => {
    // get the context
    const context = useContext(UserContextState);

    // if `undefined`, throw an error
    if (context === undefined) {
        throw new Error("useUserContextState was used outside of its Provider");
    }

    return context;
};

// context consumer hook
const useUserContextUpdater = () => {
    // get the context
    const context = useContext(UserContextUpdater);

    // if `undefined`, throw an error
    if (context === undefined) {
        throw new Error(
            "useUserContextUpdater was used outside of its Provider"
        );
    }

    return context;
};

const UserContextProvider = ({ children }) => {
    // the value that will be given to the context
    const [user, setUser] = useState(null);

    const signout = useCallback(() => {
        setUser(null);
    }, []);

    // fetch a user from a fake backend API
    useEffect(() => {
        const fetchUser = () => {
            // this would usually be your own backend, or localStorage
            // for example
            fetch("https://randomuser.me/api/")
                .then((response) => response.json())
                .then((result) => setUser(result.results[0]))
                .catch((error) => console.log("An error occured"));
        };

        fetchUser();
    }, []);

    return (
        // the Providers gives access to the context to its children
        <UserContextState.Provider value={user}>
            <UserContextUpdater.Provider value={signout}>
                {children}
            </UserContextUpdater.Provider>
        </UserContextState.Provider>
    );
};

export { UserContextProvider, useUserContextState, useUserContextUpdater };
