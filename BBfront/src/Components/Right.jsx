import React from 'react'
import asset1 from "../assets/location.png"
import asset2 from "../assets/file-download.png"
import "../Components/Opportunity.css"
import MRIMAchine from '../assets/MRIMAchine.jpg';


const Left = (props) => {
    return (
      <>
        <div className="inputboxleft">
            <h3>{props.title}</h3>
            <div className="inputboxen">
                <div className="inputhead">
                    Enter Amount:
                </div>
                <div className="inputenter">
                    <input className='inputm' type="number" />
                </div>
            </div>
            <center>
                <button className="Investbtn">INVEST</button>
            </center>
        </div>
      </>
    )
}

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