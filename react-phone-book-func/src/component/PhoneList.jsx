import "../css/PhoneList.css";
import React, { useReducer } from "react";

// (props) : 전달받은 매개변수 모두를 사용하겠다
// {변수명} : 전달받은 매개변수중 변수명에 해당하는
//      값만 추출해달라
const PhoneList = ({ phoneBooks, editPhoneBook, deletePhoneBook }) => {
  const reducer = (obj, action) => {
    if (action.type === "CLEAR_FORM") return { name: "", number: "" };
    return {
      ...obj,
      [action.name]: action.value,
    };
  };

  // useReducer()를 사용하여 sate 변수와 dispatch설정
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    number: "",
  });

  // reducer로 선언된 변수를 Component에서 사용할 수 있도록 선언
  // const { name, number } = state;

  // reducer의 dispatch를 이용하여 여러개의 input box chanage event를 하나로 공통처리
  const onChange = (e) => {
    dispatch(e.target);
  };

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
    } else if (className === "update-ok") {
      alert("변경할래 ?!!?!?!");
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
          className="update"
        >
          <td>
<<<<<<< HEAD
            <input value={phone.name} className="update" />
          </td>
          <td>
            <input value={phone.number} className="update" />
=======
            <input value={phone.name} className="update" onChange={onChange} />
          </td>
          <td>
            <input
              value={phone.number}
              className="update"
              onChange={onChange}
            />
>>>>>>> be36653bf87327acc64433be4a993a3e2a0abf8c
          </td>
          <td className="update-ok">&#10003;</td>
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
          <th>&hearts;</th>
        </tr>
      </thead>
      <tbody>{phoneItems}</tbody>
    </table>
  );
};

export default PhoneList;
