import React from 'react'
import './index.css'
const Carddata = (props) => {
  return (
    <>
    <div className="outelayer">
        <div className="datainfo">
            <div className="subtitle">
               <h4>{props.subtitle}</h4>
            </div>
            <div className="subhead">
               <h3>{props.title}</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Carddata