import React from 'react'
import './index.css'
import MRIMAchine from '../assets/MRIMAchine.jpg';

const Application = () => {
  return (
    <div className="outerlayer">
    <div className="image">
        <img src={MRIMAchine} className="Boxheadimg" alt="" />
    </div>
    <div className="datalayer">
        <h2>Application</h2>
        <div className="Applicationflex">
            <div className="statusbtn">
               Status
            </div>
                Contact us
            </div>
        </div>
    </div>
    </div>
  )
}

export default Application