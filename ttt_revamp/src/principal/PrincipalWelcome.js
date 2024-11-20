import React, {useEffect } from 'react'
import PrincipalImg from "../assets/PRINCIPAL-IMG2.png"

import Recent1 from "../assets/PRINCIPAL-RECENT1.jpg"
import Recent2 from "../assets/PRINCIPAL-RECENT2.jpg";
import Recent3 from "../assets/PRINCIPAL-RECENT3.jpg";
import Navbar from '../homepage/Navbar';

const RecentImages = [Recent1, Recent2, Recent3]

export default function PrincipalWelcome({mobileNav}) {
  
  useEffect(() => {
		document.title = "Top To Toe President";
	}, []);

  return (
		<div id="principal-welcome-page" className="page">
			<div className="principal-card">
				<img src={PrincipalImg} />
				<div className="right">
					<h1>Welcome Message</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet
						rutrum lorem in ornare. Praesent sit amet ex maximus, porta nulla a,
						semper lectus. Donec hendrerit urna sapien, non ullamcorper mauris
						rhoncus sit amet. In viverra iaculis elit ac pretium. Fusce ipsum
						magna, tempus mollis lacus vel, gravida scelerisque augue. Nullam
						non tincidunt augue. Nam quis dui elit.
					</p>
					<h2>
						Jenny Wong <br /> Principal of Top To Toe Beauty College since 1981
					</h2>
				</div>
			</div>
			<hr />
			<h1>Biography</h1>
			<div className={!mobileNav && "biography-text"}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet
					rutrum lorem in ornare. Praesent sit amet ex maximus, porta nulla a,
					semper lectus. Donec hendrerit urna sapien, non ullamcorper mauris
					rhoncus sit amet. In viverra iaculis elit ac pretium. Fusce ipsum
					magna, tempus mollis lacus vel, gravida scelerisque augue. Nullam non
					tincidunt augue. Nam quis dui elit.
				</p>
			</div>
			<iframe
				width="700"
				height="400"
				src="https://www.youtube.com/embed/P60u2bCo2_U"
				title="Beauty Legacy - Madam Jenny Wong"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				id="video-player"
			></iframe>
			<hr />
			<h1>Check out Jenny Wong's recent activities</h1>
			<div id="recent-imgs">
				{RecentImages.map((image, index) => {
					return <img key={index} src={image} alt="Recent Images" />;
				})}
			</div>
		</div>
	);
}
