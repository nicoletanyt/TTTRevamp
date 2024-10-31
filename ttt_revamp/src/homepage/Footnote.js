import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom";
import { domain } from "../App";

export default function Footnote() {
  return (
		<footer id="footnote">
			<div className="organisation-info">
				<h3>Organization Info</h3>
				<p>Registration Number: 198104310D</p>
				<p>Top To Toe College of Beauty Therapy and Cosmetology Pte Ltd.</p>
				<p>Address: #04-13 Far East Plaza, Scotts Road, Singapore 228213</p>
				<p>Tel: +65 6235 7161 | +65 8399 8269</p>
			</div>

			<div className="footer-page-link">
				<h3>Infomation</h3>
				<NavLink to={"/" + domain}>
					<p>Home</p>
				</NavLink>
				<NavLink to={"/" + domain + "/about"}>
					<p>About Us</p>
				</NavLink>
				<NavLink to={"/" + domain + "/courses"}>
					<p>Courses</p>
				</NavLink>
			</div>

			<div>
				<h3>School Operating Hours:</h3>
				<p>Monday - Friday: 9am to 6pm</p>
			</div>

			<div id="social-media-wrapper">
				<a className="social-btn">
					<FaFacebook className="icon" />
				</a>
				<a className="social-btn">
					<FaInstagram className="icon" />
				</a>
				<a className="social-btn">
					<FaYoutube className="icon" />
				</a>
			</div>
			<Outlet />
		</footer>
	);
}
