import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
const MainNav = ({ children, navList }) => {
    const nav_items = navList.map((nav) => {
        const style = { marginLeft: "auto" };
        return (
            <li className="nav-item" key={nav.id} style={nav.align && style}>
                <NavLink to={nav.link} className="nav-link">
                    {nav.title}
                </NavLink>
            </li>
        );
    });
    return (
        <BrowserRouter>
            <ul className="nav">{nav_items}</ul>
            {children}
        </BrowserRouter>
    );
};

export default MainNav;
