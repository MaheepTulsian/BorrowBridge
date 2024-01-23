import React from 'react'
// import './index.css'
import './Application.css'
import MRIMAchine from '../assets/MRIMAchine.jpg';
import { Link } from 'react-router-dom';

const Application = (props) => {
  const link = '/borrow/'+props.id;
  return (
    <Link className='application-card' to={link}>
      <div className="applicationcard">
        <div className="card-image">
            <img src={props.img} className="Boxheadimg" alt="" />
        </div>
        <div className="card-data">
            <h2>{props.title}</h2>
            <div className="card-btn">
                <div className="contact-btn">
                    Contact us
                </div>
                <div className="status-btn">
                  Status
                </div>
            </div>
        </div>
        </div>
    </Link>
  )
}

export default Application