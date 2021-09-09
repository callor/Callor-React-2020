import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
    return (
        <nav className="navbar navbar-expand bg-primary">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white">
                        HOME
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/bbsWrite" className="nav-link text-white">
                        글쓰기
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin" className="nav-link text-white">
                        로그인
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin" className="nav-link text-white">
                        회원가입
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
