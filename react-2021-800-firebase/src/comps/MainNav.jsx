import React from "react";
import "../css/Nav.css";
import { Route, NavLink } from "react-router-dom";

function MainNav() {
    return (
        <ul className="main_nav">
            <li>
                <NavLink exact to="/" activeClassName="nav_active">
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/bbs" activeClassName="nav_active">
                    글쓰기
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/login" activeClassName="nav_active">
                    로그인
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/join" activeClassName="nav_active">
                    회원가입
                </NavLink>
            </li>
        </ul>
    );
}

export default MainNav;
