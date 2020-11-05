import React, { useState, useRef } from "react";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

const PhoneMain = () => {
  const nextId = useRef(4);
  const [phoneBook, setPhoneBook] = useState([
    { id: 1, name: "이몽룡", number: "010-111" },
    { id: 2, name: "성춘향", number: "010-222" },
    { id: 3, name: "홍길동", number: "010-333" },
  ]);

  const insertPhoneBook = (name, number) => {
    setPhoneBook([
      ...phoneBook,
      { id: nextId.current++, name: name, number: number },
    ]);
  };

  return (
    <>
      <PhoneInsert insertPhoneBook={insertPhoneBook} />
      <PhoneList phoneBook={phoneBook} />
    </>
  );
};

export default PhoneMain;
