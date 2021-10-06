import { useEffect, useCallback } from "react";
import { useUserContext } from "../context/UserContextProvider.jsx";

function Logout() {
    const { setUser } = useUserContext();
    const logoutCB = useCallback(async () => {
        const res = await fetch("http://localhost:8080/users/logout");
        const result = await res.text();
        console.log(result);
        await setUser([]);
        console.log("여기는 로그아웃");
    }, [setUser]);

    useEffect(logoutCB, [logoutCB]);
    return <div></div>;
}

export default Logout;
