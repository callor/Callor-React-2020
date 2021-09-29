import React from "react";
import { NavLink } from "react-router-dom";
import "../css/MainNav.css";

function MainNav() {
    const activeNavStyle = {
        backgroundColor: "green",
    };
    return (
        <nav className="main_nav">
            <NavLink to="/" activeStyle={activeNavStyle} exact>
                Home
            </NavLink>
            <NavLink to="/insert" activeStyle={activeNavStyle} exact>
                Insert
            </NavLink>
            <NavLink to="/list" activeStyle={activeNavStyle} exact>
                List View
            </NavLink>
        </nav>
    );
}

export default MainNav;
