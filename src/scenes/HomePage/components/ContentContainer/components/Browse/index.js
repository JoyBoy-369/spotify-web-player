import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

import TopBar from "../../../TopBar";
import BrowseCategories from "./components/BrowseCategories";

const homeLinks = new Map();
homeLinks.set("featured", "featured");
homeLinks.set("genres", "genres & moods");
homeLinks.set("newreleases", "new releases");
homeLinks.set("discover", "discover");

export default class Browse extends Component {
  render() {
    const { match } = this.props;
    const TopBarWithRouter = withRouter(TopBar);

    return (
      <div className="ui center aligned segment top-container__browse-container">
        <TopBarWithRouter links={homeLinks} />
        <h1 className="ui header">Listen To MEEE!!</h1>
        <Switch>
          <Route
            path={`${match.url}/featured`}
            render={() => <BrowseCategories category="featured" />}
          />
          <Route
            path={`${match.url}/genres`}
            category="genres"
            component={BrowseCategories}
          />
          <Route
            path={`${match.url}/newreleases`}
            category="newreleases"
            component={BrowseCategories}
          />
          <Route
            path={`${match.url}/discover`}
            category="discover"
            component={BrowseCategories}
          />
          <Route
            exact
            path="/browse"
            render={() => <Redirect to={`${match.url}/featured`} />}
          />
        </Switch>
      </div>
    );
  }
}
