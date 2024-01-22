import React from 'react'
import "../Components/Oppcomp.css"
import MRIMachine from "src/assets/MRIMachine.jpg"


const Left = () => {
    return (
      <>
      <div className="inputboxleft">
          <h3>Sample 3</h3>
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
        <img src="" alt="" />
    </div>
    </>
  )
}

export {Right, Left}