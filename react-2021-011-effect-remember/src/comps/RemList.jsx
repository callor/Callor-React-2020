import React from "react";
import { useState, useEffect, useCallback } from "react";
import "../css/list.css";
import moment from "moment";
import uuid from "react-uuid";

const theader = ["작성일자", "작성시각", "제목"];

const RemList = () => {
    const tableHeader = useCallback(
        () => theader.map((title) => <th key={uuid()}>{title}</th>),
        []
    );

    // const rememberSample = {
    //     r_id: "0001",
    //     r_date: moment().format("YYYY[-]MM[-]DD"),
    //     r_time: moment().format("HH:mm:ss"),
    //     r_remember: "나의 리맴버리스트",
    //     r_destroy: false,
    // };

    const [remember, setRemember] = useState("");
    const [rememberList, setRememberList] = useState([]);

    const saveData = useCallback(() => {
        localStorage.rememberList = JSON.stringify(rememberList);
    }, [rememberList]);

    // 데이터에 변화가 생기면 localStorage에 저장하기
    useEffect(() => {
        // console.table(rememberList);
        if (rememberList.length > 0) saveData();
    }, [saveData]);

    /**
     * fetchData가 useEffect의 dependencies로 설정되어 있기 때문에
     * 렌더링마다 의존 값을 변경하지 않으려면
     * fetchData를 useEffect 내부로 옮기거나 useCallback으로 감싸야 함
     */
    const fetchData = useCallback(() => {
        const loadStringData = localStorage.rememberList;
        if (loadStringData) {
            console.log("Loading");

            const loadData = JSON.parse(loadStringData);
            /**
             * array.sort(compareFunction(a,b){
             * 		return 1; // b 가 앞으로
             * 		return 0; // 변화없음
             * 		return -1; // a 가 앞으로
             * })
             * compareFunction이 제공되면 배열 요소는 compare 함수의 반환 값에 따라 정렬
             * . a와 b가 비교되는 두 요소라면,
             * compareFunction(a, b)이 0 보다 작은 경우 a를 b보다 낮은 색인으로 정렬. 즉, a가 앞으로.
             * compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고
             * 모든 다른 요소에 대해 정렬.
             *
             * 참고 : ECMAscript 표준은 이러한 동작을 보장하지 않으므로
             * 모든 브라우저(예 : Mozilla 버전은 적어도 2003 년 이후 버전 임)가 이를 존중하지는 않는다.
             *
             * compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 정렬 즉 b가 앞으로
             * compareFunction(a, b)은 요소 a와 b의 특정 쌍이
             * 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야한다.
             * 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않는다.
             *
             */
            loadData.sort((pre, next) => {
                console.log(pre.r_destroy, pre.r_remember);
                if (pre["r_destroy"]) console.log("pre is true");
                return pre.r_destroy
                    ? 1
                    : pre.r_date > next.r_date && pre.r_time > next.r_time
                    ? -1
                    : 1;
            });
            setRememberList(loadData);
        }
    }, []);

    // 시작할때 localStorage에서 Loading하기
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const rememberComplete = (uuid) => {
        // 데이터 삭제하기
        /*
        const _rememberList = rememberList.filter(
            (remember) => remember.r_id !== uuid
        );
        setRememberList([..._rememberList]);
		*/
        let _rememberList = rememberList.map((remember) => {
            if (remember.r_id === uuid) {
                return { ...remember, r_destroy: !remember.r_destroy };
            }
            return remember;
        });
        _rememberList.sort((pre, next) => {
            return pre.r_destroy
                ? 1
                : pre.r_date > next.r_date && pre.r_time > next.r_time
                ? 1
                : -1;
        });
        setRememberList([..._rememberList]);
    };
    const tableBody = rememberList.map((remember, index) => {
        return (
            <tr
                key={remember.r_id}
                data-uuid={remember.r_id}
                onDoubleClick={(e) => {
                    // console.log(e.target.closest("TR").dataset.uuid);
                    // alert(e.target.closest("TR").dataset.uuid);
                    alert(e.target.closest("TR").dataset.uuid);
                    const uuid = e.target.closest("TR").dataset.uuid;
                    rememberComplete(uuid);
                }}
                className={remember.r_destroy ? "complete" : ""}
            >
                <td>{remember.r_date}</td>
                <td>{remember.r_time}</td>
                <td>{remember.r_remember}</td>
            </tr>
        );
    });

    const onKeyDown = async (e) => {
        if (e.keyCode === 13) {
            console.log("Enter");
            await setRememberList(
                rememberList.concat({
                    r_id: uuid(),
                    r_date: moment().format("YYYY[-]MM[-]DD"),
                    r_time: moment().format("HH:mm:ss"),
                    r_remember: e.target.value,
                    r_destroy: false,
                })
            );
            // console.table(rememberList);
            e.target.value = "";
        }
    };

    const onChange = (e) => {
        setRemember({
            ...remember,
            r_remember: e.target.value,
        });
    };

    return (
        <table className="remember_list">
            <thead>
                <tr>{tableHeader()}</tr>
            </thead>
            <tbody>
                {tableBody}

                <tr>
                    <td colSpan="2">기억하기</td>

                    <td>
                        <input
                            name="r_remember"
                            placeholder="기억하기"
                            onKeyDown={onKeyDown}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default RemList;
