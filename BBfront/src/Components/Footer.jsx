import React from 'react'
import './Comp.css';

const Footer = () => {
  return (
    <>
 <div class="container footer_container">
        <div class="footer_1">
            <a href="index.html" class="footer_logo"><h4>LOGO</h4></a>
            <p>
                Micro-Investment Plateform for Growth Story of India.
            </p>
        </div>

        <div class="footer_2">
            <h4>Permalinks</h4>
            <ul class="permalinks">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="course.html">Course</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>

        <div class="footer_3">
            <h4>Privacy</h4>
            <ul class="privacy">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Refund Policy</a></li>
            </ul>
        </div>

        <div class="footer_4">
            <h4>Contact Us</h4>
            <div>
                <p>+919****38</p>
                <p>abcderg**@gmail.com</p>
            </div>
            <ul class="footer_socials">
                <li><a href="#"><i class="uil uil-facebook-f"></i></a></li>
                <li><a href="#"><i class="uil uil-instagram-alt"></i></a></li>
                <li><a href="#"><i class="uil uil-twitter"></i></a></li>
                <li><a href="#"><i class="uil uil-linkedin-alt"></i></a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer