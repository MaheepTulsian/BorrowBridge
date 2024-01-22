import React from 'react'
import './index.css'
import MRIMAchine from '../assets/MRIMAchine.jpg';
const Cards = () => {
  return (
    <>
    <div className="outerlayer">
    <div className="image">
        <img src={MRIMAchine} className="Boxheadimg" alt="" />
    </div>
    </div>
    </>
  )
}

export default Cards