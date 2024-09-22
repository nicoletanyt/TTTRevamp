import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footnote() {
  return (
    <footer id="footnote">
      <div>
        <h3>About</h3>
        <ul>
          <li>Our history</li>
          <li>Our brand</li>
          <li>Our team</li>
        </ul>
      </div>

      <div>
        <h3>Contact us</h3>
        <ul>
          <li>Address</li>
          <li>Email</li>
          <li>Phone number</li>
          <li>Operation hours</li>
        </ul>
      </div>

      <div>
        <h3>Courses</h3>
        <ul>
          <li>Course 1</li>
          <li>Course 2</li>
        </ul>
      </div>
      <div id="social-media-wrapper">
        <a className="social-btn">
          <FaFacebook className='icon' />
        </a>
        <a className="social-btn">
          <FaInstagram className='icon' />
        </a>
        <a className="social-btn">
          <FaYoutube className='icon' />
        </a>
      </div>
    </footer>
  );
}
