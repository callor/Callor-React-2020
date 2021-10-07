import { useHistory } from "react-router-dom";
import { fetchUser } from "../module/fetchModule";
import { useUserContext } from "../context/UserContextProvider.jsx";
import React, { useCallback, useEffect } from "react";

/**
 * 로그인 권한이 있어야 하는 Route만 따로 모아두기
 * @returns
 */
function AuthRoute({ children }) {
    const { setUser } = useUserContext();
    const history = useHistory();

    const fetchCB = useCallback(async () => {
        const user = await fetchUser();
        console.log("fetch user", user);
        await setUser(user);
        console.log("여기는 member만 사용할 수 있는 page 입니다");
        if (user?.id) {
            console.log("사용자 ID", user?.id);
        } else {
            history.replace("/login");
        }
    }, [setUser, history]);

    useEffect(fetchCB, [fetchCB]);

    // history.replace("/login");

    return <>{children}</>;
}

export default AuthRoute;
