import React, { useState } from "react";

const PhoneInsert = ({ insertPhoneBook }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const onClick = (e) => {
    insertPhoneBook(name, number);
    setName("");
    setNumber("");
  };
  return (
    <form>
      <input placeholder="이름" value={name} onChange={onChangeName} />
      <input placeholder="전화번호" value={number} onChange={onChangeNumber} />
      <button
        onClick={onClick}
        //(e) => {
        //  insertPhoneBook(name, number);
        // }}
        type="button"
      >
        저장
      </button>
    </form>
  );
};

export default PhoneInsert;
