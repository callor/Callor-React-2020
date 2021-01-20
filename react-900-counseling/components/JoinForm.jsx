import React, { useState, memo, useCallback } from "react";

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
    } catch (error) {
      alert(error.message);
      setAuthError(error.message);
    }
  };

  return (
    <div className="authContainer">
      <h3>한국경영원 인재개발원</h3>
      <form onSubmit={onSubmit} className="container">
        <select name="curriculum" data-msg="훈련직종은" className="authInput" value={inputBox.curriculum} onChange={onChangInputBox} data-size="2">
          <option value="NONE">훈련직종선택</option>
          <option value="SpringMVC">SpringMVC</option>
          <option value="Java_Python">자바&파이썬</option>
        </select>
        {authError.curriculum && <span className="authError">{authError.curriculum}</span>}

        <input name="email" data-msg="이메일은" type="email" placeholder="Email" value={inputBox.email} onChange={onChangInputBox} className="authInput" />
        {authError.email && <span className="authError">{authError.email}</span>}

        <input name="userName" data-msg="이름은" type="text" placeholder="이름" value={inputBox.userName} onChange={onChangInputBox} className="authInput" />
        {authError.userName && <span className="authError">{authError.userName}</span>}

        <input name="phone" data-msg="전화번호는" type="phone" placeholder="전화번호" value={inputBox.phone} onChange={onChangInputBox} className="authInput" />
        {authError.phone && <span className="authError">{authError.phone}</span>}

        <input type="submit" className="authInput authSubmit" value="등록하기" />
      </form>
    </div>
  );
};
export default AuthForm;
