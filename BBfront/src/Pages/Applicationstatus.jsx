import React from 'react'
import Carddata from '../Components/Carddata'
import asset from "../assets/deposit.png"
import './Page.css'

const Applicationstatus = () => {
  return (
    <>
    <div className="headapplication">
        <div className="header">
            <div className="title">
                <h1>Gym Khana</h1>
            </div>
            <div className="status">
                <h1>Pending</h1>
            </div>
        </div>

        <div className="carddata">
            <div className="cardamountcollected">
                <Carddata title="50 GoerliETH" subtitle = "Amount Collected"/>
            </div>
        
            <div className="cardamountwithdrawn">
                <Carddata title="10 GoerliETH" subtitle = "Amount Withdrawn"/>
            </div>
        </div>

        <center> <button className='wdr-btn'> <img src={asset} className='wdr-icn'/> Withdraw</button> </center>
    </div>
    </>
  )
}

export default Applicationstatus
