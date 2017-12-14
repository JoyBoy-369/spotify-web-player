import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import Browse from "./components/Browse";
import View from "./components/View";

export default class ContentContainer extends Component {
  render() {
    return (
      <div className="thirteen wide right floated column top-container">
        <Route path="/view" component={View} />
        <Route path="/browse" component={Browse} />
        <Route path="/search" component={Browse} />
        <Route path="/collection" component={Browse} />
        <Route exact path="/" render={() => <Redirect to="/browse" />} />
      </div>
    );
  }
}
