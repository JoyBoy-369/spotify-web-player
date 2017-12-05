import React, { Component } from "react";
import { SVGLoader } from "src/components";
import NavItems from "../NavItems";

const navItems = new Map();
navItems.set("search", "Search");
navItems.set("browse", "Home");
navItems.set("collections", "Your Music");

class Sidebar extends Component {
  render() {
    return (
      <div className="ui three wide column padded grid nav-container">
        <div className="row ">
          <SVGLoader width={30} height={30} />
        </div>
        {Array.from(navItems.entries()).map(([key, value]) => (
          <NavItems style="nav-container__item" key={key} item={key}>
            {value}
          </NavItems>
        ))}
      </div>
    );
  }
}

export default Sidebar;
