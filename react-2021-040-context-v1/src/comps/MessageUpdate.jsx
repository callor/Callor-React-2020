import React, { useContext } from "react";
import MessageContext from "./context/MessageContext";

/**
 * 버튼을 클릭하면 App.js에 선언된 message state에 변화를 준다.
 * 이때 App.js 에 선언된 state들을 중간의 MessageMain을 거쳐서 전달받아야 하나
 * Context를 사용하므로써 필요한 곳에서 직접 값을 참조하고 사용할 수 있다
 */
const MessageUpdate = () => {
    const { setMessage, isEdit, setEdit } = useContext(MessageContext);
    const onClick = async (e) => {
        await setMessage(e.target.textContent); // isEdit ? "대한민국" : "호랑나비");
        await setEdit(!isEdit);
    };
    const style = {
        backgroundColor: "blue",
        padding: "15px 30px",
        color: "white",
        fontWeight: "bold",
    };
    return (
        <div>
            <button style={style} onClick={onClick}>
                {isEdit ? "호랑나비" : "대한민국"}
            </button>
        </div>
    );
};

export default MessageUpdate;
