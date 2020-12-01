import React, {createContext,useContext} from "react";
import ProMessageContext from "../providor/MessageProvidor"

const ProList_use = ({}) => {
  const messageContext= useContext(ProMessageContext)
  return (
      <div>
       <p>useContext 에서 수신 : { messageContext.message} </p>
      </div>
  );
};

export default ProList_use ;
