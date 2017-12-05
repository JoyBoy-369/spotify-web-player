import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = props => {
  const { activeStyle, style, item } = props;

  return (
    <NavLink
      to={`/${item}`}
      activeClassName="nav-item--active"
      className={style ? `row ${style}` : "nav-item"}
    >
      {props.children}
    </NavLink>
  );
};

export default NavItems;
