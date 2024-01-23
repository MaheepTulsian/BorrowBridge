import React from 'react'
import './Application.css'
import MRIMAchine from '../assets/MRIMAchine.jpg';
import { Link } from "react-router-dom";

const Cards = (props) => {
    const link="../oppurtunity/"+props.id;
  return (
    <>
    <Link className='application-card' to={link}>
        <div className="card-image">
            <img src={props.img} className="Boxheadimg" alt="" />
        </div>
        <div className="oppertunity-card-data">
            <h2>{props.title}</h2>
            <div className="amount">
                
            </div>
        </div>
    </Link>
    </>
  )
}

export default Cards