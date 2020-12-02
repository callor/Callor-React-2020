import React, { useContext } from "react";
import MessageProvidor from "../providor/MessageProvidor";

const ProList = () => {
  const { message } = useContext(MessageProvidor);

  return (
    <div>
      <p>메인에서 List로 전달 : {message} </p>
    </div>
  );
};

export default ProList;
