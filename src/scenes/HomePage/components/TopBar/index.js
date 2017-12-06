import React, { Component } from "react";

import NavItems from "../NavItems";

class TopBar extends Component {
  render() {
    const { links, match } = this.props;

    return (
      <div className="ui relaxed horizontal list ">
        {Array.from(links).map(([key, value]) => {
          return (
            <div className="item" key={key}>
              <NavItems item={key} path={match.path}>
                {value}
              </NavItems>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TopBar;
