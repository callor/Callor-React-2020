import React from "react";
import { useState, useEffect } from "react";
import "../css/list.css";
import moment from "moment";
import uuid from "react-uuid";

const theader = ["작성일자", "작성시각", "제목"];
const tableHeader = theader.map((title, index) => {
    return <th>{title}</th>;
});

const RemList = () => {
    const rememberSample = {
        r_id: "0001",
        r_date: moment().format("YYYY[-]MM[-]DD"),
        r_time: moment().format("HH:mm:ss"),
        r_remember: "나의 리맴버리스트",
        r_destroy: false,
    };

    const [remember, setRemember] = useState("");
    const [rememberList, setRememberList] = useState([rememberSample]);

    // 시작할때 localStorage에서 Loading하기
    useEffect(() => {
        // effect
        const loadStringData = localStorage.rememberList;
        if (loadStringData) {
            console.log("Loading");

            const loadData = JSON.parse(loadStringData);
            loadData.sort((pre, next) => {
                console.log(pre.r_destroy, pre.r_remember);
                if (pre["r_destroy"] === true) {
                    console.log("pre is true");
                }
                return pre.r_destroy
                    ? 1
                    : pre.r_date > next.r_date && pre.r_time > next.r_time
                    ? -1
                    : 1;
            });
            setRememberList(loadData);
        }
    }, []);
    // 데이터에 변화가 생기면 localStorage에 저장하기
    useEffect(() => {
        // console.table(rememberList);
        localStorage.rememberList = JSON.stringify(rememberList);
    }, [rememberList]);

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

    const onKeyPress = async (e) => {
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
            <tr>{tableHeader}</tr>
            <tbody>{tableBody}</tbody>
            <tr>
                <td colspan="2">기억하기</td>

                <td>
                    <input
                        name="r_remember"
                        placeholder="기억하기"
                        onKeyDown={onKeyPress}
                    />
                </td>
            </tr>
        </table>
    );
};

export default RemList;
