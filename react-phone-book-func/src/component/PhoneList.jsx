import "../css/PhoneList.css";
import React, { useReducer } from "react";

const reducer = (object, action) => {
  // dispatch(reducer)가 여러번 호출될때
  // 호출시점에 전달된 데이터는 action에 담기고
  // 바로 직전에 전달된 데이터는 object에 담겨 있다
  console.log("reducer", object, action);
  if (action.type === "CLEAR_FORM") return { name: "", number: "" };
  else if (action.type === "EDIT_FORM")
    return { name: action.name, number: action.number };
  return {
    ...object,
    [action.name]: action.value,
  };
};

// (props) : 전달받은 매개변수 모두를 사용하겠다
// {변수명} : 전달받은 매개변수중 변수명에 해당하는
//      값만 추출해달라
const PhoneList = ({
  phoneBooks,
  editPhoneBook,
  deletePhoneBook,
  updatePhoneBook,
}) => {
  // useReducer()를 사용하여 sate 변수와 dispatch설정
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    number: "",
  });

  // reducer로 선언된 변수를 Component에서 사용할 수 있도록 선언
  const { name, number } = state;

  // reducer의 dispatch를 이용하여 여러개의 input box chanage event를 하나로 공통처리
  const onChange = (e) => {
    dispatch(e.target);
  };

  const trOnClick = (e) => {
    const className = e.target.className;
    const closest = e.target.closest("TR");
    const name = closest.childNodes[0].innerText; // closest.dataset.name;

    const number = closest.dataset.number;
    const id = closest.dataset.id;
    console.log(id, name, number);
    if (className === "delete") {
      if (window.confirm("정말 삭제합니다!!!")) {
        deletePhoneBook(id);
      }
      return false;
    } else if (className === "update-ok") {
      alert("변경할래 ?!!?!?!");
      updatePhoneBook(id, state.name, state.number);
      return false;
    }
    console.log("edit", name, number);
    // reducer에서 다음 항목을 추출하여 state변수에 세팅
    // type : action.type 으로 추출
    // 데이터는 action.name, action.number로 추출
    // dispatch로 여러번 데이터가 전달되면 이전 전달된 데이터는 object에 남아 있다
    dispatch({ type: "EDIT_FORM", name: name, number: number });
    editPhoneBook(id);
  };

  const phoneItems = phoneBooks.map((phone) => {
    if (phone.isEdit) {
      console.log("map");
      return (
        <tr
          key={phone.id}
          onClick={trOnClick}
          // data-name={phone.name}
          // data-number={phone.number}
          data-id={phone.id}
          className="update"
        >
          <td>
            <input
              value={name}
              name="name"
              className="update"
              onChange={onChange}
              onClick={(e) => {
                e.target.select();
              }}
            />
          </td>
          <td>
            <input
              value={number}
              name="number"
              className="update"
              onChange={onChange}
              onClick={(e) => {
                e.target.select();
              }}
            />
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
          data-number={phone.number}
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
    <table className="phoneList">
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
