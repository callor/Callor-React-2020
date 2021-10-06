import { useEffect } from "react";
import { useUserContext } from "../context/UserContextProvider";

function Notice() {
    const { user, setUser } = useUserContext();

    useEffect(async () => {
        // const user = await fetchData();
        // setUser(user);
        const fetchData = async () => {
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
        };
        fetchData();
    }, [user]);
    return <div>공지사항</div>;
}

export default Notice;
