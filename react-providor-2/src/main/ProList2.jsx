import React from "react";
import ProMessageContext from "../providor/MessageProvidor"

const ProList2 = ({}) => {
  
  return (
    <ProMessageContext.Consumer>
      { ({message}) => {
        return( 
            <div>
              <p>List2 에서 수신 : { message} </p>
            </div>
          )
      }}
      </ProMessageContext.Consumer>
  );
 
};

export default ProList2;
