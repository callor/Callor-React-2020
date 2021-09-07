import React from "react";
import { useState } from "react";
import "../../css/list.css";
import moment from "moment";
import uuid from "react-uuid";

/**
 * Write = ( {bbs} ) =>{}
 * 매개변수로 전달받은 변수(들)중에서 나는 bbs만 받겠다
 *
 * App.js에서 전달받은 상태(bbsVO를 bbs로 받음)는
 * 전달받아서 매개변수로 부터 추출하는 순간 상태의 기능을 상실한다
 * 고정된(Read Only)형태의 props(properties)가 되어버린다
 * props가 된 변수 객체는 보여주는(UI)용도로는 사용할수 있지만
 * 값을 변경하는 것은 불가능해진다.
 * 값을 변경하려고 시도를 하면 오류가 발생한다
 *
 * 상태(변수, 객체)는 반드시 선언된 컴포넌트에서만 변경이 가능하다
 * 입력은 Write.js에서 실행하지만 입력된 데이터를 전파하기 위해서는
 * App.js에게 상태를 변경해 달라고 요청을 해야한다.
 *
 * 이러한 기능을 해결하기 위해서는
 * App.js 에 상태를 변경하는 함수를 선언하고
 * 그 함수를 다시 하위(Write.js)컴포넌트에게 전달하여
 * 대리 실행하도록 코드를 작성해야 한다.
 *
 * Write = ( {bbs, onBBsChange}) 코드는
 *
 * Write = ( props ) =>{
 * 	const {bbs,onBBsChange} = props
 * }
 * 코드를 한번에 처리한 것이다
 *
 *
 */

const theader = ["작성일자", "작성시각", "제목"];

const tableHeader = theader.map((title, index) => {
    return <th>{title}</th>;
});

const RemList = () => {
    const rememberSample = {
        r_id: 0,
        r_date: moment().format("YYYY[-]MM[-]DD"),
        r_time: moment().format("HH:mm:ss"),
        r_remember: "나의 리맴버리스트",
        r_destroy: false,
    };
    const [remember, setRemember] = useState("");
    const [rememberList, setRememberList] = useState([rememberSample]);
    const tableBody = rememberList.map((remember, index) => {
        return (
            <tr
                data-uuid={remember.r_id}
                onDoubleClick={(e) => {
                    // console.log(e.target.closest("TR").dataset.uuid);
                    // alert(e.target.closest("TR").dataset.uuid);
                    alert(e.target.closest("TR").dataset.uuid);
                }}
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
            console.table(rememberList);
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
