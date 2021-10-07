import { useEffect, useCallback } from "react";
import { useUserContext } from "../context/UserContextProvider.jsx";
import { fetchLogout } from "../module/fetchModule";

function Logout() {
    const { setUser } = useUserContext();
    const logoutCB = useCallback(async () => {
        const result = await fetchLogout();
        console.log(result);
        await setUser([]);
        console.log("여기는 로그아웃");
    }, [setUser]);

    useEffect(logoutCB, [logoutCB]);
    return <div></div>;
}

export default Logout;
