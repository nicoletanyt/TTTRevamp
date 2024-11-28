import React from 'react'
import image from "../assets/contact.png"

export default function Contact() {
  return (
		<div id="contact-page" className="page">
			<div id='contact-text'>
				<h1>Book an Appointment</h1>
				<p>Phone Number: Tel: +65 6235 7161 | +65 8399 8269</p>
				<p>Email Address: hello@toptotoecolleage.com</p>
				<p>
					Mailing Address: Far East Plaza, Scotts Road #04-13, Singapore 228213
				</p>
			</div>
			<img src={image} id="contact-img" />
		</div>
	);
}
