import React from 'react'
import './index.css'
import MRIMAchine from '../assets/MRIMAchine.jpg';
import { Link } from "react-router-dom";

const Cards = (props) => {
    const link="../oppurtunity/"+props.id;
  return (
    <>
    <Link className='linksss' to={link}>
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
    </Link>
    </>
  )
}

export default Cards