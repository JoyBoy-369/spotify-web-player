import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from "src/components/PrivateRoute";
import LandingPage from "./scenes/LandingPage";

const App = () => (
  <Switch>
    <Route path="/" component={LandingPage} />
  </Switch>
);

export default App;
