import "../css/PhoneInsert.css";
import React, { useState, useReducer } from "react";

const PhoneInsert = ({ insertPhoneBook }) => {
  //
  //
  // useState를 useReducer로 변경하여 한개의 이벤트 핸들러로 모든 input box의 change event를 핸들링할수 있다
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeNumber = (e) => {
  //   setNumber(e.target.value);
  // };
  //
  //

  /**
   *
   *
   * state 변수를 Reducer로 관리하기
   * state : 공통으로 사용할 변수(변수명 아님)
   * dispatch : state 변수를 변경할때 사용할 action
   *    dispatch()함수에 매개변수를 넘기고 실행하면
   *    reducer(obj, action)로 설정한 함수가 매칭된다
   *    reducer 매개변수 action에는 type 속성을 추가하고
   *    이 type을 비교하여 어려가지 연산을 수행한다.
   */
  // reducer의 dispatch에 연결할 callback
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
  const { name, number } = state;

  // reducer의 dispatch를 이용하여 여러개의 input box chanage event를 하나로 공통처리
  const onChange = (e) => {
    dispatch(e.target);
  };

  const onClick = (e) => {
    insertPhoneBook(name, number);

    // dispatch함수를 호출하면서 type 값을 설정하여 매개변수로 전달
    // reducer에서 action.type 값으로 참조할 수 있다.
    dispatch({ type: "CLEAR_FORM" });
    // setName("");
    // setNumber("");
  };

  return (
    <form class="phoneForm">
      <input placeholder="이름" name="name" value={name} onChange={onChange} />
      <input
        placeholder="전화번호"
        name="number"
        value={number}
        onChange={onChange}
      />
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
