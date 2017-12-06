import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = props => {
  const { activeStyle, style, item, path, activeState } = props;

  return (
    <NavLink
      to={path ? `${path}/${item}` : `/${item}`}
      activeClassName={activeStyle ? activeStyle : "nav-item--active"}
      className={style ? `row ${style}` : "nav-item"}
      isActive={activeState}
      onlyActiveOnIndex
    >
      {props.children}
    </NavLink>
  );
};

export default NavItems;
