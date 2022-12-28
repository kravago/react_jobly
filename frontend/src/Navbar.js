import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar({ currentUser, logout}) {
  const loginSignup = (
    <nav>
        <NavLink to="/login">Login</NavLink> |
        <NavLink to="/signup">Sign Up</NavLink>
    </nav>);

  const logoutPrompt = (
    <nav>
      <p>Welcome {currentUser}</p>
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
      {currentUser ? logoutPrompt: loginSignup}
    </div>
  );
}

export default NavBar;