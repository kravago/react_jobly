import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './Homepage';
import Company from './Company';
import CompanyList from './CompanyList';

function Routes({ companies }) {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/companies">
        <CompanyList companies={companies}/>
      </Route>
      <Route exact path="/companies/:handle">
        <Company />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
