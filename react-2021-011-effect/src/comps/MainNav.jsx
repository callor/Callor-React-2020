import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
    return (
        <ul className="main_menu">
            <li>
                <NavLink to="/" exact>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" exact>
                    나에 대하여
                </NavLink>
            </li>
            <li>
                <NavLink to="/remember" exact>
                    리맴버리스트
                </NavLink>
            </li>

            <li className="search_box">
                <input
                    name="search"
                    type="search"
                    placeholder="검색어를 입력하세요"
                />
            </li>
        </ul>
    );
}

export default MainNav;
