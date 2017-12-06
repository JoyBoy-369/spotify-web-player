import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import TopBar from "../../../TopBar";
import AlbumsContainer from "../AlbumsContainer";

const homeLinks = new Map();
homeLinks.set("featured", "featured");
homeLinks.set("genres", "genres & moods");
homeLinks.set("newreleases", "new releases");
homeLinks.set("discover", "discover");

export default class Browse extends Component {
  render() {
    const TopBarWithRouter = withRouter(TopBar);
    return (
      <div className="ui center aligned segment top-container__browse-container">
        <TopBarWithRouter links={homeLinks} />
        <h1 class="ui header">Listen To MEEE!!</h1>
        <AlbumsContainer />
      </div>
    );
  }
}
