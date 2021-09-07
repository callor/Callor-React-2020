import React, { useEffect } from "react";

function Home() {
    /**
     * useEffect 를 사용 할 때에는
     * 첫번째 파라미터에는 함수,
     * 두번째 파라미터에는 의존값이 들어있는 배열 (deps)을 넣는다.
     *
     * 만약에 deps를 빈(blakn) 배열로 설정하면,
     * 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출된다.
     *
     * deps배열이 있는 경우 배열 내용이 변경되면 호출된다
     *
     * 그리고, useEffect 에서는 함수를 반환 할 수 있는데
     * 이를 cleanup 함수라고 한다.
     *
     * cleanup 함수는 useEffect 에 대한 뒷정리를 해준다,
     * deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출된다
     *
     *
     */
    useEffect(() => {
        console.log("컴포넌트가 화면에 나타남");
        return () => {
            console.log("컴포넌트가 화면에서 사라짐");
        };
    }, []);
    return (
        <div>
            <h1>Home</h1>
            <p>Take me home~ Country road~</p>
        </div>
    );
}

export default Home;
