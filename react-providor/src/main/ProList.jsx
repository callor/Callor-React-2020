import React from "react";
import ProMessageContext from "../providor/MessageProvidor"

const ProList = () => {
  
  return (
    <ProMessageContext.Consumer>
      {({ message }) => (
        <div>
          <p>List에서 수신 : { message} </p>
          
        </div>
      )}
      </ProMessageContext.Consumer>
  );
 
};

export default ProList;
