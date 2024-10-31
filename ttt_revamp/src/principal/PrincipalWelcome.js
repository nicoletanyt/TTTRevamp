import React, {useEffect, useState} from 'react'
import PrincipalImg from "../assets/PRINCIPAL-IMG2.png"
import { BIOGRAPHY } from '../Data';
import LeftPicture from './LeftPicture';

export default function PrincipalWelcome() {
  
  useEffect(() => {
		document.title = "Top To Toe President";
	}, []);

	const leftItems = BIOGRAPHY.filter((element, index) => index % 2 == 0)


  return (
		<div id="principal-welcome-page" className="page">
			<div className="principal-card">
				<div className="left">
					<img src={PrincipalImg} />
				</div>
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
			<div className="biography-text">
				{leftItems.map((element) => {
					return (<LeftPicture img={element.img} text={element.text}/>)
				})}
				

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
			<div></div>
		</div>
	);
}
