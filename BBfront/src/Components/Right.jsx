import React from 'react'
import { useState } from 'react'
import asset1 from "../assets/location.png"
import asset2 from "../assets/file-download.png"
import "../Components/Opportunity.css"
import MRIMAchine from '../assets/MRIMAchine.jpg';
import { Web3Button } from "@thirdweb-dev/react";
import Component from './Component';

const clic = () => {
    return (
        <Component/>
    )
}
const Left = (props) => {
    const [amount, setAmount] = useState(0);
  
    const handleInputChange = (e) => {
      setAmount(e.target.value);
    };
  
    const handleWeb3ButtonClick = (contract) => {
      // Ensure the input has a value before proceeding with the contract call
      if (amount) {
        contract.call("purchaseTokens", ["12345", amount, "0x47f22F652F3bea8C9d25e4D505f3F5e1fdB99279"]);
      } else {
        console.error("Amount is required");
        // You can add additional logic or UI feedback for the user
      }
    };
  
    return (
      <>
        <div className="inputboxleft">
          <h3>{props.title}</h3>
          <div className="inputboxen">
            <div className="inputhead">Enter Amount:</div>
            <div className="inputenter">
              <input
                className="inputm"
                type="number"
                value={amount}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <center>
            <Web3Button
              contractAddress="0x46C0dc40Cd015a03cA32eCd1c254cB9c31c1C591"
              action={handleWeb3ButtonClick}
              disabled={!amount} // Disable the button if amount is empty
            >
              purchaseTokens
            </Web3Button>
          </center>
        </div>
      </>
    );
  };

const Right = (props) => {
  return (
    <div className="content-area">
        <div className="headimage">
            <img src={props.img} alt="" className='thumbnailimg'/>
        </div>
        <div className="titlebtn">
            <div className="titleoppp">
                <h2>{props.title}</h2>
            </div>
            <div>
                <button className="downbtn">
                    <img src={asset2} alt="" className='dbtn'/>
                    Download Pitch 
                </button>
            </div>
        </div>
        <div className="desc">
        {props.desc}
        </div>
        <div className="locationopp">
            <div className="locicon">
                <img className='imageloc' src={asset1} alt="" />
            </div>
            <div className="title">
            {props.location}    
            </div>
        </div>
    </div>
  )
}

export {Right, Left}