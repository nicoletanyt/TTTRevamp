import React from 'react'
import "../index.css";
import { Outlet, NavLink } from "react-router-dom";
import { domain } from '../App';

export default function Navbar() {
  return (
		<>
			<nav>
				<div id="navbar-wrapper">
					<div className="logo">Logo</div>
					<div className="links">
						<NavLink to="/" end>
							<p className="nav-button">Home</p>
						</NavLink>
						<NavLink to="about">
							<p className="nav-button">About Us</p>
						</NavLink>
						<NavLink to="courses">
							<p className="nav-button">Courses</p>
						</NavLink>
						<p className="nav-button">Student Services</p>
						<p className="nav-button">Connect</p>
					</div>
				</div>
			</nav>

			<Outlet />
		</>
	);
}
