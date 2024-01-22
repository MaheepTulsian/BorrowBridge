import React from 'react'
import './index.css'
import MRIMAchine from '../assets/MRIMAchine.jpg';
const Cards = (props) => {
  return (
    <>
    <div className="outerlayer">
    <div className="image">
        <img src={MRIMAchine} className="Boxheadimg" alt="" />
    </div>
    <div className="datalayer">
        <h2>{props.title}</h2>
        <div className="priceflex">
            <div className="priceamt">
                {props.price}
            </div>
            <div className="priceinc">
                {props.interest}
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Cards