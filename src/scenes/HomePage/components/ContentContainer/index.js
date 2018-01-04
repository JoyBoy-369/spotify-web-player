import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import Browse from "./components/Browse";
import View from "./components/View";

export default class ContentContainer extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div className="right floated row top-container">
        <Route
          path="/view"
          render={props => <View {...props} dispatch={dispatch} />}
        />
        <Route
          path="/browse"
          render={props => {
            return <Browse {...props} dispatch={dispatch} />;
          }}
        />
        <Route path="/search" component={Browse} />
        <Route path="/collection" component={Browse} />
        <Route exact path="/" render={() => <Redirect to="/browse" />} />
      </div>
    );
  }
}
