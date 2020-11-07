import "../css/PhoneList.css";
import React from "react";

// (props) : 전달받은 매개변수 모두를 사용하겠다
// {변수명} : 전달받은 매개변수중 변수명에 해당하는
//      값만 추출해달라
const PhoneList = ({ phoneBooks, editPhoneBook, deletePhoneBook }) => {
  const trOnClick = (e) => {
    const className = e.target.className;
    const closest = e.target.closest("TR");
    const name = closest.dataset.name;
    const id = closest.dataset.id;
    console.log(id, name);
    if (className === "delete") {
      if (window.confirm("정말 삭제합니다!!!")) {
        deletePhoneBook(id);
      }
      return false;
    }
    editPhoneBook(id);
  };

  const phoneItems = phoneBooks.map((phone) => {
    console.log(phone.editable);
    if (phone.editable) {
      return (
        <tr
          key={phone.id}
          onClick={trOnClick}
          data-name={phone.name}
          data-id={phone.id}
        >
          <td>
            <input value={phone.name} />
          </td>
          <td>
            <input value={phone.number} />
          </td>
          <td className="delete">&times;</td>
        </tr>
      );
    } else {
      return (
        <tr
          key={phone.id}
          onClick={trOnClick}
          data-name={phone.name}
          data-id={phone.id}
        >
          <td>{phone.name}</td>
          <td>{phone.number}</td>
          <td className="delete">&times;</td>
        </tr>
      );
    }
  });

  return (
    <table class="phoneList">
      <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>{phoneItems}</tbody>
    </table>
  );
};

export default PhoneList;
