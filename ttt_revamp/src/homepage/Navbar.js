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
              <h3 className="nav-button">Home</h3>
            </NavLink>
            <NavLink to="/about">
              <h3 className="nav-button">About us</h3>
            </NavLink>
            <NavLink to="/courses">
              <h3 className="nav-button">Courses</h3>
            </NavLink>
            <h3 className="nav-button">Student Services</h3>
            <h3 className="nav-button">Connect</h3>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
