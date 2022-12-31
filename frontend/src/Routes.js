import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './Homepage';
import Company from './Company';
import CompanyList from './CompanyList';
import JobList from './JobList';
import LoginForm from './LoginForm';
import Profile from './Profile';
import SignupForm from './SignupForm';

function Routes({ login, register }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/companies">
          <CompanyList/>
        </Route>
        <Route exact path="/companies/:handle">
          <Company/>
        </Route>
        <Route exact path="/jobs">
          <JobList/>
        </Route>
        <Route exact path="/login">
          <LoginForm login={login}/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>"
        <Route exact path="/signup">
          <SignupForm register={register}/>
        </Route>
      <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
