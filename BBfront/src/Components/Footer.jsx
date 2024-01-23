import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div class="footer-container">
            <a href="#" class="company-logo">
                <img src="#" alt="companmy logo"/>
            </a>
            <div class="link-column flex-center">
                <h4>About Us</h4>
                <a href="#" class="hover-links">Services</a>
                <a href="#" class="hover-links">Contact Us</a>
                <a href="#" class="hover-links">FAQ</a>
                <a href="#" class="hover-links">Support</a>
                <a href="#" class="hover-links">Blog</a>
            </div>
            <div class="link-column flex-center">
                <h4>Terms of use</h4>
                <a href="#" class="hover-links">Privacy Policy</a>
                <a href="#" class="hover-links">Cookie Policy</a>
                <a href="#" class="hover-links">Help center</a>
                <a href="#" class="hover-links">Community</a>
            </div>
            <div class="link-column flex-center">
                <h4>Partners</h4>
                <a href="#" class="hover-links">Investors</a>
                <a href="#" class="hover-links">Carrers</a>
            </div>
        </div>


        {/*
        <hr/>
        
        <div class="sub-footer flex-center">

            <p>Made with ❤️ by team CyberBros.©</p>
            <div class="social-links flex-center">
                <img src="./media/facebook.png" alt=""/>
                <img src="./media/instagram.png" alt=""/>
                <img src="./media/twitter-alt.png" alt=""/>
                <img src="./media/linkedin.png" alt=""/>
                <img src="./media/youtube.png" alt=""/>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </div>
        </div> */}

    </footer>
  )
}

export default Footer
