import React, { useCallback, useEffect } from "react";
import { fetchData } from "../module/fetchLogin.js";
import { useUserContext } from "../context/UserContextProvider.jsx";

function BBs() {
    const { setUser } = useUserContext();

    /**
     * Effect()가 호출하는 함수를 Callback으로 처리할때는
     * 매개변수에 state의 setter 함수를 넣어주어야 한다
     */
    const fetchCB = useCallback(async () => {
        const user = await fetchData();
        await setUser(user);
    }, [setUser]);

    useEffect(() => fetchCB, [fetchCB]);
    // useEffect(() => {
    //     fetchCB();
    //     // return () => {console.log("Effect 종료")};
    // }, [fetchCB]);
    return <div>자유게시판</div>;
}

export default BBs;
