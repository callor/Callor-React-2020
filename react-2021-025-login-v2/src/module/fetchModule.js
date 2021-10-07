export const fetchJoin = async (joinData) => {
    const response = await fetch("http://localhost:8080/users/join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(joinData),
    });

    if (response.ok) {
        const result = await response.json();
        return result;
    }
};

//동기식 방식 ( async await 사용!!!!!)
export const fetchLogin = async ({ id, password }) => {
    console.log(id, password);
    const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        credentials: "include",
        body: JSON.stringify({
            id: id,
            password: password,
        }),
    });

    if (response.ok) {
        //서버통신이 성공적으로 이루어지면 users에 json값 대입
        const user = await response.json();

        //users안 객체들을 순회하면서 그 객체들의 id값과 form 컴포넌트에서 받음 account의 id값과 비교
        //서로 일치하는 것만 user에 대입
        // const user = users.find((user) => user.id === id);
        //일치하는 user가 없거나, 비밀번호가 틀리면 해당 에러 생성
        console.log("result", user);
        if (!user || user.password !== password) {
            throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
        }

        //모든게 일치하면 그 user 정보 return -> 이 return값이 form 컴포넌트 내 fetchLogin 함수 값으로 출력되는것
        //form 컴포넌트에서 setUser값에 넣어야함
        return user;
    }

    //서버 통신이 안이루어졌을떄
    throw new Error("서버 통신이 원할하지 않습니다.");
};

export const fetchUser = async () => {
    const response = await fetch("http://localhost:8080/users/", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        credentials: "include",
    });
    if (response.ok) {
        const user = await response.json();
        console.log("result User", user);
        return user;
    } else {
        return [];
    }
};

export const fetchLogout = async () => {
    const res = await fetch("http://localhost:8080/users/logout", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        credentials: "include",
    });
    const result = await res.text();
    console.log(result);
    return result;
};
