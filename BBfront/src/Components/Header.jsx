import React, { useEffect, useState } from 'react';
import MetaMaskOnboarding from '@metamask/onboarding';
// import './Comp.css';
import './Header.css'
import usestore from '../State/store.js' 
import logo from '../assets/logo.png'
import Popup from '../Components/Popup.jsx'
import { Navigate } from 'react-router-dom';

const Header = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const PrivateRoute = ({ element, path }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const fetchData = async (walletAddress) => {
  
      try {
        const response = await fetch(`http://localhost:3000/api/wallet/${walletAddress}`);
        if (!response.ok) {
            return(
              <Navigate to="/login" replace={true} />
              )
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    };
  
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
      await fetchData(walletaddress);
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
    <nav>
        <div class="deck1">
            <img src={logo} alt="logo" class="logo"/>
        </div>
        <div class="deck2 flex-center">
            <div class="about quick-link flex-center">Invest</div>
            <div class="services quick-link flex-center">Borrow</div>
            <div class="contact quick-link flex-center">Contact Us</div>
            
            <button class="nav-btn" onClick={isMetamaskInstalled ? connectMetaMask : installMetaMask} disabled={!isMetamaskInstalled}>
              {isConnected ? `${accounts[0]}` : 'Register with MetaMask'}
            </button>
        </div>
    </nav>

  );
};

export default Header;


