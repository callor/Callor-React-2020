import React, { useState, useRef, useEffect } from "react";
import "../css/PhoneMain.css";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

const PhoneMain = () => {
  const [phoneBooks, setPhoneBooks] = useState([
    // { id: 0, name: "이몽룡", number: "010-111", editable: false },
    // { id: 1, name: "성춘향", number: "010-222", editable: false },
    // { id: 2, name: "홍길동", number: "010-333", editable: false },
  ]);
  const nextId = useRef(phoneBooks.length);

  const insertPhoneBook = (name, number) => {
    setPhoneBooks([
      ...phoneBooks,
      { id: nextId.current++, name: name, number: number, editable: false },
    ]);
  };

  const deletePhoneBook = (id) => {
    console.log("삭제할 ID", id);
    const filterBooks = phoneBooks.filter((phone) => {
      console.log(phone.id, id);
      return phone.id !== Number(id);
    });
    console.log(filterBooks);
    setPhoneBooks(filterBooks);
  };

  const editPhoneBook = (id) => {
    const editBooks = phoneBooks.map((phone) => {
      if (phone.id === Number(id)) {
        return { ...phone, editable: true };
      } else {
        return { ...phone, editable: false };
      }
    });
    setPhoneBooks(editBooks);
  };

  const updatePhoneBook = (id, name, number) => {
    const updateBooks = phoneBooks.map((phone) => {
      if (phone.id === Number(id)) {
        return { ...phone, name: name, number: number, editable: false };
      } else {
        return { ...phone, editable: false };
      }
    });
    setPhoneBooks(updateBooks);
  };

  useEffect(() => {
    const loadPhoneBooks = JSON.parse(window.localStorage.getItem("phoneBook"));
    nextId.current = loadPhoneBooks.length;
    setPhoneBooks(loadPhoneBooks);
  }, []);

  useEffect(() => {
    console.log("phoneBooks");
    window.localStorage.setItem("phoneBook", JSON.stringify(phoneBooks));
  }, [phoneBooks]);

  return (
    <div className="phoneMain">
      <h1>나의 연락처</h1>

      <PhoneList
        phoneBooks={phoneBooks}
        editPhoneBook={editPhoneBook}
        deletePhoneBook={deletePhoneBook}
        updatePhoneBook={updatePhoneBook}
      />
      <PhoneInsert insertPhoneBook={insertPhoneBook} />
    </div>
  );
};

export default PhoneMain;
