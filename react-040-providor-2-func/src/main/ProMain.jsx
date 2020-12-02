import React from "react";

import ProList from "./ProList";
import ProSetMessage from "./ProMessage";

import MessageProvider from "../providor/MessageProvidor";
import { useState } from "react";

const ProMain = () => {
  const [message, setMessage] = useState("전달");
  const [isEdit, setEdit] = useState(false);
  // Provider에 JSON객체 type으로 묶어서 전달할 것
  const provData = {
    message,setMessage,
    isEdit,setEdit,
  };

  return (
    <div>
      <p>메인 : {message}</p>
      <MessageProvider.Provider
        // value={{ message, setMessage, isEdit, setEdit }} // 개별로 보내기
        value={provData} // 묶음으로 보내기
      >
        <ProList />
        <ProSetMessage />
      </MessageProvider.Provider>
    </div>
  );
};

export default ProMain;
