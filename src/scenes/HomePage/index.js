import React, { Component } from "react";
import Sidebar from "./components/Sidebar";

import ContentContainer from "./components/ContentContainer";

class HomePage extends Component {
  render() {
    return (
      <div className="ui padded grid home-container ">
        <Sidebar {...this.props} />
        <ContentContainer {...this.props} />
      </div>
    );
  }
}

export default HomePage;
