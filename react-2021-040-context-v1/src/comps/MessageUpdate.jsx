import React, { useContext } from "react";
import MessageProvidor from "../providor/MessageProvidor";

const MessageUpdate = () => {
    const { setMessage, isEdit, setEdit } = useContext(MessageProvidor);
    const onClick = (e) => {
        if (isEdit) {
            setMessage("대한민국");
        } else {
            setMessage("호랑나비");
        }
        setEdit(!isEdit);
    };
    return (
        <div>
            <button
                style={{
                    backgroundColor: "blue",
                    padding: "15px 30px",
                    color: "white",
                    fontWeight: "bold",
                }}
                onClick={onClick}
            >
                {isEdit ? "대한민국" : "호랑나비"}
            </button>
        </div>
    );
};

export default MessageUpdate;
