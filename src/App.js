import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import PrivateRoute from 'src/components/PrivateRoute';
import LandingPage from './scenes/LandingPage';

const App=()=>(
        <Switch>
          <Route path="/browse" component={LandingPage} />
          <Route exact path="/" render={() => <Redirect to="/browse"/>} />
        </Switch>
  );

export default App;
