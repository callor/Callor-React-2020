import MessageProvidor from "../providor/MessageProvidor";
import { useContext } from "react";
const MessageView = () => {
    const { message } = useContext(MessageProvidor);
    return (
        <div>
            <p>MessageUpdate에 변경된 state를 View에서 보여주기 : {message} </p>
        </div>
    );
};

export default MessageView;
