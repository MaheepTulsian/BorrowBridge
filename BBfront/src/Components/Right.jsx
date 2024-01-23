import React from 'react'
import "../Components/Oppcomp.css"
import MRIMAchine from '../assets/MRIMAchine.jpg';


const Left = () => {
    return (
      <>
      <div className="inputboxleft">
          <h3>MRI Scanner Fund</h3>
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

const Right = () => {
  return (
    <>
    <div className="headimage">
        <img src={MRIMAchine} alt="" className='thumbnailimg'/>
    </div>
    <div className="titlebtn">
        <div className="titleoppp">
            <h2>MRI Scanner Fund</h2>
        </div>
        <div className="downbtn">
            <button>Download Pitch </button>
        </div>
    </div>
    <div className="desc">
    Do you want to support a noble cause that aims to improve the quality and accessibility of health care? If yes, then please consider investing in our campaign for the fund for MRI Scanner machine. MRI Scanner machine is a medical device that uses magnetic fields and radio waves to produce images of the internal organs and tissues of the body. However, MRI Scanner machine is expensive. So, our campaign aims to raise enough funds to purchase and install an MRI Scanner machine in our local hospital, which currently lacks this facility. By doing so, we hope to provide better and faster diagnosis and treatment for our patients, as well as reduce the burden and cost of traveling to distant cities for getting an MRI scan. We believe that everyone deserves access to quality health care, regardless of their location or income. We need your help to make this dream a reality. Every investment, no matter how small, counts and makes a difference. Together, we can save lives and improve health outcomes for our community. Thank you for your generosity and support.
    </div>
    <div className="locationopp">
        <div className="locicon">
            <img className='imageloc' src="https://static.vecteezy.com/system/resources/previews/009/267/042/original/location-icon-design-free-png.png" alt="" />
        </div>
        <div className="title">
            <b>CT & MRI Scan Centre</b> 37F4+HX7, Tamil Salai, Egmore, Chennai,<br/> Tamil Nadu 600008
        </div>
    </div>
    </>
  )
}

export {Right, Left}