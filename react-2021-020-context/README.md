# React Context API

-   React의 Context API를 사용하는 것은 종종 매우 유용하다.  
    React의 컨텍스트와 함께 정기적으로 사용해야 하는 몇 가지 패턴이 있으며 이러한 패턴은 잘 알려져 있지 않다.  
    이 프로젝트에서 공유하고 있으므로 전문가처럼 React Contexts를 사용할 수 있다.

-   시작하기 전에 간단한 알림으로, 여기에 컨텍스트의 바닐라 후크 기반 구현이 있다.  
    (다양한 패턴의 예로 사용할 것입니다).

    import React, { useContext, createContext, useState, useEffect } from 'react';

    // create context
    const UserContext = createContext();

    const App = () => {
    // the value that will be given to the context
    const [user, setUser] = useState(null);

    // fetch a user from a fake backend API
    useEffect(() => {
    const fetchUser = () => {
    // this would usually be your own backend, or localStorage
    // for example
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((result) => setUser(result.results[0]))
    .catch((error) => console.log('An error occurred');
    };

        fetchUser();

    }, []);

    return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={user}>
    <Page />
    </UserContext.Provider>
    );
    };

    const Page = () => {
    // access the context value
    const user = useContext(UserContext);

    if (user?.login?.username) {
    return <p>You are logged in as {user?.login.username}</p>;
    } else {
    return <p>You are not logged in</p>;
    }
    };

    export default App;

위의 코드에서 내가 마음에 들지 않는 한 가지는 서로 관련이 거의 없을 때 컨텍스트 논리가 앱 코드와 혼합되어 있다는 것입니다. 앱은 자식에게만 컨텍스트를 제공하기를 원하며 이 컨텍스트가 어떻게 만들어지는지는 신경 쓰지 않습니다.
