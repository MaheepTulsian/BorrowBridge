import React, { useEffect, useState } from 'react';
import MetaMaskOnboarding from '@metamask/onboarding';
import './Comp.css';

const Header = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const { ethereum } = window;

    const onboardMetaMaskClient = async () => {
      setIsMetamaskInstalled(ethereum && ethereum.isMetaMask);
    }

    onboardMetaMaskClient();
  }, []);

  const connectMetaMask = async () => {
    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setIsConnected(true);
      setAccounts(accounts);
    } catch (err) {
      console.error("error occured while connecting to MetaMask: ", err)
    }
  }

  const isMetamaskInstalledFunc = () => {
    return ethereum && ethereum.isMetaMask;
  }

  const installMetaMask = () => {
    const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
    onboarding.startOnboarding();
  }

  return (
    <div className="container nav_container">
      <div className="nav_left">
        <a href="index.html">
          <h3>LOGO</h3>
        </a>
      </div>

      <div className="nav_right">
        <ul className="nav_menu_horizontal">
          <li className="quick_links"><a  href="index.html">Home</a></li>
          <li className="quick_links"><a  href="about.html">About</a></li>
          <li className="quick_links"><a  href="contact.html">Contact Us</a></li>
          <li className="contact_button">
            <button onClick={isMetamaskInstalled ? connectMetaMask : installMetaMask} disabled={!isMetamaskInstalled}>
              {isConnected ? `${accounts[0]}` : 'Register with MetaMask'}
            </button>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
