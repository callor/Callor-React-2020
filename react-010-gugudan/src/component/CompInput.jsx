import React, { useState } from "react";

function CompInput(props) {
  const [number, setNumber] = useState();

  //   useEffect(() => {
  //     setNumber(Number(props.number));
  //   }, []);

  const onChange = (e) => {
    setNumber(e.target.value);
    props.setNumber(e.target.value);
  };
  const style = {
    fontSize: "20px",
    padding: "5px",
    textAlign: "center",
  };
  return (
    <div>
      <input
        style={style}
        placeholder="숫자입력"
        value={number}
        onChange={onChange}
      />
    </div>
  );
}

export default CompInput;
