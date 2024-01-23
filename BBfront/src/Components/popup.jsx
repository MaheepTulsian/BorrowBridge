import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name, 'Email:', email);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} placeholder='eg. John Doe'/>
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} placeholder='eg. JohnDoe@xyz.com'/>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
