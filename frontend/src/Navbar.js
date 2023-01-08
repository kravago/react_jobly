import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar({ currentUser, logout}) {
  const loginLinks = (
    <nav>
        <NavLink to="/login">Login</NavLink> |
        <NavLink to="/signup">Sign Up</NavLink>
    </nav>);

  const userLinks = (
    <nav>
      <p>Welcome {currentUser}</p> |
      <NavLink to="/profile">Profile</NavLink> |
      <NavLink to="/" onClick={logout}>Logout</NavLink>
    </nav>
  )

  return (
    <div>
      <nav>
        <NavLink to="/">Jobly</NavLink> |
        <NavLink to="/companies">Companies</NavLink> |
        <NavLink to="/jobs">Jobs</NavLink>
      </nav>
      {currentUser ? userLinks: loginLinks}
    </div>
  );
}

export default NavBar;