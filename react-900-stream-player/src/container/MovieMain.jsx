import React, { useContext } from "react";
import InMemory from "../providor/InMemoryProvidor";

function MovieMain(props) {
  const { jwtToken } = useContext(InMemory);
  return (
    <div>
      <h1>반가워</h1>
      <h2>{jwtToken}</h2>
    </div>
  );
}

export default MovieMain;
