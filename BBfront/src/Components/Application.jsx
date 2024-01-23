import React from 'react'
import './index.css'
import MRIMAchine from '../assets/MRIMAchine.jpg';
import { Link } from 'react-router-dom';

const Application = (props) => {
  const link = '/borrow/'+props.id;
  return (
    <Link className='linksss' to={link}>
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
            <div className="contactbtn">
                Contact us
            </div>
        </div>
    </div>
    </div>
    </Link>
  )
}

export default Application