import React, { Component } from "react";

import NavItems from "../NavItems";

class TopBar extends Component {
  render() {
    const { links } = this.props;
    return (
      <div className="ui horizontal list ">
        {Array.from(links).map(([key, value]) => {
          <div className="item">
            <NavItems key={key} item={key}>
              {value}
            </NavItems>
          </div>;
        })}
      </div>
    );
  }
}

export default TopBar;
