import React, {useEffect} from 'react'
import { TEAM } from '../Data'
import Member from './Member'

export default function About() {
	useEffect(() => {
		document.title = "Top To Toe - About Us";
	}, []);

  return (
	<>
		<div id="about-us-page" className='page'>
			<h1>Our Team</h1>
			<p>
				Top To Toe (TTT) Beauty College started in 1981 to provide its students
				in Singapore with internationally recognised beauty and holistic
				wellness experts from overseas. We have trained our local trainers to
				have expertise that matches international standards. Our high-quality
				training has enabled our graduates to succeed in the industry.
			</p>
			<br />
			<div id="team-wrapper">
				{TEAM.map((person, index) => {
					return <Member key={index} person={person} />;
				})}
			</div>
		</div>
	</>
	);
}
