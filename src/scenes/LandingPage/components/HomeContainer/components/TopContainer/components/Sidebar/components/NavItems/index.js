import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = props => {
  const { activeStyle, style, navPathName = "/login", item = "/" } = props;
  return (
    <NavLink
      to={`${navPathName}/${item}`}
      activeClassName={`${activeStyle}`}
      className={`row ${style}`}
    >
      {props.children}
    </NavLink>
  );
};

export default NavItems;
