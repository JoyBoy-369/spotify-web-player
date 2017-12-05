import React, { Component } from "react";
import { Route } from "react-router-dom";

import TopBar from "../../../TopBar";

const homeLinks = new Map();
homeLinks.set("featured", "featured");
homeLinks.set("genres", "genres & moods");
homeLinks.set("newreleases", "new releases");
homeLinks.set("discover", "discover");

export default class Browse extends Component {
  render() {
    return (
      <div>
        "browse"
        <TopBar links={homeLinks} />
      </div>
    );
  }
}
