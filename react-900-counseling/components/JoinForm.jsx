import React, { useState } from "react";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [authError, setAuthError] = useState("");
  const [phone, setPhone] = useState("");
  const [curriculum, setCurriculum] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "curriculum") {
      setCurriculum(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="authContainer">
      <h3>한국경영원 인재개발원</h3>
      <form onSubmit={onSubmit} className="container">
        <select name="curriculum" className="authInput" value={curriculum} onChange={onChange} data-size="2">
          <option value="NONE">훈련직종선택</option>
          <option value="SpringMVC">SpringMVC</option>
          <option value="Java_Python">자바&파이썬</option>
        </select>
        <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange} className="authInput" />
        <input name="userName" type="text" placeholder="이름" required value={userName} onChange={onChange} className="authInput" />
        <input name="phone" type="phone" placeholder="전화번호" required value={phone} onChange={onChange} className="authInput" />
        <input type="submit" className="authInput authSubmit" value="등록하기" />
        {authError && <span className="authError">{error}</span>}
      </form>
    </div>
  );
};
export default AuthForm;
