import React from 'react'
import "../index.css";
import { Outlet, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <div id="navbar-wrapper">
          <div className="logo">Logo</div>
          <div className="links">
            <NavLink to="/">
              <h4 className="nav-button">Home</h4>
            </NavLink>
            <NavLink to="/about">
              <h4 className="nav-button">About us</h4>
            </NavLink>
            <NavLink to="/courses">
              <h4 className="nav-button">Courses</h4>
            </NavLink>
            <h4 className="nav-button">Student Services</h4>
            <h4 className="nav-button">Connect</h4>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
