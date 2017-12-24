import React, { Component, Fragment } from "react";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import PlayerContainer from "./components/PlayerContainer";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="bg" />
        <div className="ui padded grid home-container ">
          <Sidebar {...this.props} />
          <ContentContainer {...this.props} />
          <PlayerContainer />
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
