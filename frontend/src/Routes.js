import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './Homepage';
import Company from './Company';
import CompanyList from './CompanyList';
import Jobs from './Jobs';

function Routes({ companies, jobs }) {
  return (
    <div>
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
        <Route exact path="/jobs" >
          <Jobs jobs={jobs}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
