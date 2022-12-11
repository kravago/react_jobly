import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './Homepage';
import Company from './Company';
import CompanyList from './CompanyList';
import JobList from './JobList';
import Login from './Login';
import Profile from './Profile';
import Signup from './Signup';

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
        <Route exact path="/jobs">
          <JobList jobs={jobs}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>"
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
