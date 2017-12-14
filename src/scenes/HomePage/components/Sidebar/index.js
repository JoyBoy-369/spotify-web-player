import React, { Component } from "react";
import { SVGLoader } from "src/components";
import NavItems from "../NavItems";

const navItems = new Map();
navItems.set("search", "Search");
navItems.set("browse", "Home");
navItems.set("collection", "Your Music");

class Sidebar extends Component {
  render() {
    return (
      <div className="ui vertical sidebar menu visible uncover nav-container">
        <div className="item ">
          <SVGLoader width={30} height={30} />
        </div>
        {Array.from(navItems.entries()).map(([key, value]) => (
          <NavItems
            style="item nav-container__item"
            activeStyle="nav-container__item--active"
            key={key}
            item={key}
          >
            {value}
          </NavItems>
        ))}
      </div>
    );
  }
}

export default Sidebar;
