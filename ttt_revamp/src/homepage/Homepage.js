import React, { useEffect, useState } from "react";
import Timeline from "./Timeline";
import HighlightItem from "./HighlightItem";
import { HIGHLIGHTS } from "../Data";
import { NavLink, Outlet } from "react-router-dom";
import { domain } from "../App";

// Import Images
import Banner1 from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";
import PrincipalImg from "../assets/PRINCIPAL-IMG1.png";

const BANNERS = [Banner1, Banner2, Banner3];

export default function Homepage() {
	const [bannerImg, setBannerImg] = useState(0);

	useEffect(() => {
		document.title = "Top To Toe College";

		// const imgInterval = setInterval(() => {
		// 	setBannerImg((prevBannerImg) => (prevBannerImg + 1) % BANNERS.length);
		// }, 3000);
		// return () => clearInterval(imgInterval);
	}, []);

	return (
		<div id="homepage" className="page">
			<section className="banner-img-section">
				<img src={BANNERS[0]} alt="Banner" id="banner-img" />,
			</section>
			<hr />
			<section>
				<h1>Top To Toe Beauty College Highlights</h1>
				<p className="desc">
					Top To Toe (TTT) Beauty College started in 1981 to provide its
					students in Singapore with internationally recognised beauty and
					holistic wellness experts from overseas. We have trained our local
					trainers to have expertise that matches international standards. Our
					high-quality training has enabled our graduates to succeed in the
					industry.
				</p>
				<br />
				<div id="highlights-wrapper">
					{HIGHLIGHTS.map((item, index) => {
						return (
							<HighlightItem
								key={index}
								image={item.image}
								title={item.title}
								desc={item.desc}
							/>
						);
					})}
				</div>
			</section>
			<hr />
			<section>
				<h1>Principal's Welcome</h1>
				<div className="principal-welcome-wrapper">
					<div className="left">
						<h1>
							TOP TO TOE <br /> World Masters
						</h1>
						<hr />
						<h2>BEAUTY IS ABOUT LIFE AND THE LIVING</h2>
						<NavLink
							to="principal-welcome"
							target="_blank"
							className="learn-more-btn"
						>
							<p>Learn more</p>
						</NavLink>
					</div>
					<div className="right">
						<img id="principal-img" src={PrincipalImg} />
						<h1>Jenny Wong</h1>
						<h3>
							Principal of Top To Toe Beauty College Since 1981
							<br />
							Founder of World Masters Professional Associates
							<br />
							President of Singapore Association of Beauty Therapist
						</h3>
					</div>
				</div>
			</section>
			<hr />
			<section>
				<h1>Milestones</h1>
				<Timeline />
			</section>

			<Outlet />
		</div>
	);
}
