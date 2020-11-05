import React from "react";

const PhoneInsert = ({ insertPhoneBook }) => {
  return (
    <form>
      <input placeholder="이름" />
      <input placeholder="전화번호" />
      <button onClick={insertPhoneBook} type="button">
        저장
      </button>
    </form>
  );
};

export default PhoneInsert;
