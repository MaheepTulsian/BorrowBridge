import React, { useEffect, useState } from 'react';
import MetaMaskOnboarding from '@metamask/onboarding';
import './Comp.css';
import usestore from '../State/store.js'

const Header = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);

  const PrivateRoute = ({ element, path }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
  
    useEffect(() => {
      if (walletaddress) {
        setLoggedIn(true);
      }
    }, [walletaddress]);
  
    return isLoggedIn ? element : <Navigate to="/login" state={{ from: path }} replace={true} />;
  };

  const { walletaddress, setaddress} = usestore(
        (state) => ({
          walletaddress: state.walletaddress,
            setaddress: state.setaddress
        })
    )

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
      setaddress(accounts)
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
        <a className="quick_links" href="index.html">
          <h3>LOGO</h3>
        </a>
      </div>

      <div className="nav_right">
        <ul className="nav_menu_horizontal">
          <li><a className="quick_links" href="index.html">Home</a></li>
          <li><a className="quick_links" href="about.html">Borrow</a></li>
          <li><a className="quick_links" href="contact.html">Dashboard</a></li>
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
