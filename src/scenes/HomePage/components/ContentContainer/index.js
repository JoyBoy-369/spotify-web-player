import React, { Component } from "react";
import Browse from "./components/Browse";

import { Route } from "react-router-dom";

export default class ContentContainer extends Component {
  render() {
    return (
      <div className="thirteen wide column top-container">
        <Route path="/browse" component={Browse} />
        <Route path="/search" component={Browse} />
        <Route path="/collection" component={Browse} />
      </div>
    );
  }
}
