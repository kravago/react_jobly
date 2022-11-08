import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './Homepage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/"><Homepage /></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
