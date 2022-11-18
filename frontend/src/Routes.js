import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './Homepage';
import Company from './Company';

function Routes() {
  return (
    <Switch>
      <Route exact path="/"><Homepage /></Route>
      <Route exact path="/companies/:handle"><Company /></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
