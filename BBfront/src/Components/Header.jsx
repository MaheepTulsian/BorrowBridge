import React from 'react';
import './Comp.css';

const Header = () => {
  return (
    <div className="container nav_container">
      <a href="index.html">
        <h3>LOGO</h3>
      </a>
      <ul className="nav_menu_horizontal">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="course.html">Course</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li className="contact_button"><button>Contact Us</button></li>
      </ul>
    </div>
  );
};

export default Header;
