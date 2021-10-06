import React, { useCallback, useEffect } from "react";
import { fetchData } from "../module/fetchLogin.js";
import { useUserContext } from "../context/UserContextProvider.jsx";
import { useHistory } from "react-router-dom";

function MyPage() {
    const { setUser } = useUserContext();
    const history = useHistory();

    /**
     * Effect()가 호출하는 함수를 Callback으로 처리할때는
     * 매개변수에 state의 setter 함수를 넣어주어야 한다
     */
    const fetchCB = useCallback(async () => {
        const user = await fetchData();
        await setUser(user);
        console.log("여기는 MyPage", user?.id);
        if (user?.id) {
            console.log("사용자 ID", user?.id);
        } else {
            history.replace("/login");
        }
    }, [setUser]);

    useEffect(fetchCB, [fetchCB]);
    useEffect(() => {
        fetchCB();
        // return () => {console.log("Effect 종료")};
    }, [fetchCB]);
    return (
        <div>
            <h1>MyPage</h1>
        </div>
    );
}

export default MyPage;
