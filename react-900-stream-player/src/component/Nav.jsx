import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/join">회원가입</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
