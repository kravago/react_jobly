import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <NavLink to="/">Jobly</NavLink> |
        <NavLink to="/companies">Companies</NavLink> |
        <NavLink to="/jobs">Jobs</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;