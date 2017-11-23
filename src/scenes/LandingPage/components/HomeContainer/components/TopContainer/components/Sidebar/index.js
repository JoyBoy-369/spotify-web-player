import React, { Component } from "react";
import { SVGLoader, Divider } from "src/components";
import NavItems from "./components/NavItems";

const navItems = new Map();
navItems.set("search", "Search");
navItems.set("home", "Home");
navItems.set("collections", "Your music");

class Sidebar extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="ui three wide column padded grid nav-container">
        <div className="row ">
          <SVGLoader width={30} height={30} />
        </div>
        {Array.from(navItems.entries()).map(([key, value]) => (
          <NavItems
            style="nav-container__item"
            activeStyle="nav-container__item--active"
            navPathName={match.path}
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
