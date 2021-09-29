# React Context API

-   React의 Context API를 사용하는 것은 종종 매우 유용하다.  
    React의 컨텍스트와 함께 정기적으로 사용해야 하는 몇 가지 패턴이 있으며 이러한 패턴은 잘 알려져 있지 않다.  
    이 프로젝트에서 공유하고 있으므로 전문가처럼 React Contexts를 사용할 수 있다.

-   시작하기 전에 간단한 알림으로, 여기에 컨텍스트의 바닐라 후크 기반 구현이 있다.  
    (다양한 패턴의 예로 사용할 것입니다).

'''

    import React, { useContext, createContext, useState, useEffect } from 'react';

    // create context
    const UserContext = createContext();

    const Page = () => {
    	// access the context value
    	const user = useContext(UserContext);
    	if (user?.login?.username) {
    		return <p>You are logged in as {user?.login.username}</p>;
    	} else {
    		return <p>You are not logged in</p>;
    	}
    };

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


    export default App;

## 다른 파일에서 React Context 로직 추출

-   위의 코드에서 내가 마음에 들지 않는 한 가지는 서로 관련이 거의 없을 때 컨텍스트 논리가 앱 코드와 혼합되어 있다는 것이다.  
    앱은 자식에게만 컨텍스트를 제공하기를 원하며 이 컨텍스트가 어떻게 만들어지는지는 신경 쓰지 않는다.

-   이 모든 논리를 외부 파일로 추출해 보겠다.

## 사용자 지정 공급자와 함께 React Context 사용

-   먼저 UserContext.jsx라는 새 파일 내부에 UserContextProvider 구성 요소를 만든다  
    이 구성 요소는 컨텍스트(사용자)의 값을 가져오고 이를 UserContext.Provider에 제공하는 논리를 보유하는 구성 요소이다.

''''

    UserContext.jsx
    import React, { createContext, useState, useEffect } from "react";

    // create context
    const UserContext = createContext();

    const UserContextProvider = ({ children }) => {
    // the value that will be given to the context
    const [user, setUser] = useState(null);

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
    	// the Provider gives access to the context to its children
    	<UserContext.Provider value={user}>
    		{children}
    	</UserContext.Provider>
    	);
    };

    export { UserContext, UserContextProvider };

-   이제 App 구성 요소에서 위의 내용을 제거했으므로 훨씬 더 깔끔해졌다.

''''

    App.jsx
    import React, { useContext } from "react";

    import { UserContext, UserContextProvider } from "./UserContext";

    const App = () => {
    	return (
    		<UserContextProvider>
    			<Page />
    		</UserContextProvider>
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
