import React, { Component } from "react";
import Sidebar from "./components/Sidebar";

import ContentContainer from "./components/ContentContainer";

class TopContainer extends Component {
  render() {
    const matchPath = this.props.match.path;
    return (
      <div className="ui padded grid">
        <Sidebar {...this.props} />
        <ContentContainer {...this.props} />
      </div>
    );
  }
}

export default TopContainer;
