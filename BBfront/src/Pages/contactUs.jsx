import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries or feedback.</p>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="input-field" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="input-field" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" className="textarea-field" placeholder="Type your message here..." required></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
