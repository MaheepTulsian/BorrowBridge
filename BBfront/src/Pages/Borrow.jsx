import React from 'react'
import "../Components/Opportunity.css"
import "./Page.css"
import Application from '../Components/Application'

const Borrow = () => {
  return (
    <>
    <center>
    <button className="Borrowbtn">Fill The Form </button>
    </center>
    <div className="card-grid">
        <Application
        id="oppid"
        title="Gym Khana"
        status= "Pending"
        img="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltc3xlbnwwfHwwfHx8MA%3D%3D"
        />
        <Application
        id="oppid1"
        title="Gaming Center"
        status= "Pending"
        img="https://cdn1.matadornetwork.com/blogs/1/2022/02/Computer-Stockholm-Sweden-Space-gaming-entertainment-center.jpg.jpg"
        />
        <Application
        id="oppid7"
        title="Sewing Machine Centre"
        status= "Pending"
        img="https://www.globalgiving.org/pfil/38218/ph_38218_146312.jpg"
        />
        
    </div>
    </>
  )
}

export default Borrow