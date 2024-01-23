import React from 'react'
import Carddata from '../Components/Carddata'
import './Page.css'

const Applicationstatus = () => {
  return (
    <>
    <div className="headapplication">
        <div className="header">
            <div className="title">
                <h2>TESTING NAME</h2>
            </div>
            <div className="status">
                STATUS
            </div>
        </div>
        <div className="carddata">
            <div className="cardamountcollected">
            <Carddata
        title="50 Geth"
        subtitle = "Amount Collected"
        />
            </div>
            <div className="cardamountwithdrawn">
            <Carddata
        title="10Geth"
        subtitle = "Amount Withdrawn"
        />
            </div>
        </div>
        <center><button>Withdraw</button></center>
    </div>
    </>
  )
}

export default Applicationstatus