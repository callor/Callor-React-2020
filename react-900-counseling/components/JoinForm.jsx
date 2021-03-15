import React, { useState, memo, useCallback } from "react";
import axios from "axios";

const TextInput = memo(({ value, onChange, name, type, className }) => {
  return <input type={type} name={name} value={value} required onChange={onChange} className={className} />;
});

const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const AuthForm = () => {
  const [authError, setAuthError] = useState({
    curriculum: "",
    userName: "",
    email: "",
    phone: "",
  });
  const [inputBox, setInputBox] = useState({
    uerName: "",
    phone: "",
    email: "",
    curriculum: "NONE",
  });

  const onChangInputBox = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputBox({
        ...inputBox,
        [name]: value,
      });
      const msg = e.target.dataset.msg;
      setAuthError({
        ...authError,
        [name]: value === "NONE" || !value ? `${msg} 반드시 입력(선택) 해야 합니다` : "",
      });
    },
    [inputBox]
  );

  const onSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    try {
      setAuthError({
        curriculum: inputBox.curriculum === "NONE" ? "직종을 선택하세요" : "",
        email: !inputBox.email ? "E-mail을 입력하세요" : "",
        userName: !inputBox.userName ? "이름을 입력하세요" : "",
        phone: !inputBox.phone ? "휴대폰 번호를 입력하세요" : "",
      });
      if (inputBox.curriculum === "NONE") return false;
      const body_data = {
        st_curriculum: inputBox.curriculum,
        st_name: inputBox.userName,
        st_tel: inputBox.phone,
        st_email: inputBox.email,
      };

      console.log(body_data);

      /**
       * axios를 사용하여 spring api post로 데이터 전송하기
       * 두번째 파라메터를 null로 선언하고
       * params객체에 json 데이터를 담아서 보낸다
       *
       * spring에서는 vo에 데이터를 받으면 된다.
       */
      axios
        .post("https://api.callor.com/student/insert", null, { params: body_data })
        .then((res) => {
          if (res.data) {
            alert(res.data.st_name + "님 환영합니다!!!");
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      alert(error.message);
      setAuthError(error.message);
    }
  };

  return (
    <div className="authContainer">
      <h3>한국경영원 인재개발원</h3>
      <p>반갑습니다</p>
      <form onSubmit={onSubmit} className="container">
        <select name="curriculum" data-msg="훈련직종은" className="authInput" value={inputBox.curriculum} onChange={onChangInputBox} data-size="2">
          <option value="NONE">훈련직종선택</option>
          <option value="응용SW3회차">응용SW엔지니어링 3회차</option>
        </select>
        {authError.curriculum && <span className="authError">{authError.curriculum}</span>}

        <input name="email" data-msg="이메일은" type="email" placeholder="Email" value={inputBox.email} onChange={onChangInputBox} className="authInput" />
        {authError.email && <span className="authError">{authError.email}</span>}

        <input name="userName" data-msg="이름은" type="text" placeholder="이름" value={inputBox.userName} onChange={onChangInputBox} className="authInput" />
        {authError.userName && <span className="authError">{authError.userName}</span>}

        <input name="phone" data-msg="전화번호는" type="phone" placeholder="010-1111-1111" value={inputBox.phone} onChange={onChangInputBox} className="authInput" />
        {authError.phone && <span className="authError">{authError.phone}</span>}

        <input type="submit" className="authInput authSubmit" value="등록하기" />
      </form>
    </div>
  );
};
export default AuthForm;
