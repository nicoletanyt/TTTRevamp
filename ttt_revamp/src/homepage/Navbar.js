import React, { useEffect, useState } from 'react'
import "../index.css";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import LOGO from "../assets/logo.png"

export default function Navbar({mobileNav}) {

	const location = useLocation()
	
	// Responsive
	const [menuOpen, setMenuOpen] = useState(false);

	// close menu if link changes 
	useEffect(() => {
		setMenuOpen(false)
	}, [location]);

  return (
		<>
			<nav>
				<div
					id="desktop-nav-wrapper"
					style={{ display: mobileNav ? "none" : "grid" }}
				>
					<br/>
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
						<p className="nav-button">Contact</p>
						<div className="logo">
							<img src={LOGO} id="logo" />
						</div>
					</div>
				</div>
				<div id="mobile-nav" style={{ display: mobileNav ? "block" : "none" }}>
					<button
						id="dropdown-btn"
						onClick={() => {
							setMenuOpen((prev) => !prev);
						}}
						// style={{ display: menuOpen ? "block" : "none" }}
					>
						<FiMenu id="menu-icon" />
					</button>
					<div
						className="dropdown"
						style={{ display: menuOpen ? "flex" : "none" }}
					>
						<NavLink to="/" end>
							<p className="nav-button">Home</p>
						</NavLink>
						<NavLink to="about">
							<p className="nav-button">About Us</p>
						</NavLink>
						<NavLink to="courses">
							<p className="nav-button">Courses</p>
						</NavLink>
						<p className="nav-button">Contact</p>
					</div>
				</div>
			</nav>

			<Outlet />
		</>
	);
}
