import { useCallback, useEffect } from "react";
import { useUserContext } from "../context/UserContextProvider";

function Notice() {
    const { setUser } = useUserContext();
    const fetchCB = useCallback(async () => {
        const res = await fetch("http://localhost:8080/users/", {
            method: "POST",
            header: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
            },
            credentials: "include",
        });
        const result = await res.json();
        console.log("result", result);
        await setUser(result);
    }, [setUser]);

    /**
     *
     * Effect() 내에서 state를 setter 하면
     * setter 되는 state를 매개변수로 넣어주어야 한다
     * 그렇지 않으면 경고가 발생
     *
     * 그러나, state를 매개변수로 넣어주면 Effect()가 무한 실행된다
     *
     * 별도로 함수를 분리하고 Effect()에서 호출하여 실행한다
     * 이때는 함수 이름을 매개변수로 넣어준다
     *
     */
    useEffect(() => fetchCB, [fetchCB]);
    return <div>공지사항</div>;
}

export default Notice;
