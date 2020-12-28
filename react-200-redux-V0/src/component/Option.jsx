import React from "react";

function Option(props) {
  const onChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div>
      <input value={props.diff} onChange={onChange} />
    </div>
  );
}

export default Option;
