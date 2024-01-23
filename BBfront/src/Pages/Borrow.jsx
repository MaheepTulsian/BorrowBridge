import React from 'react'
import "../Components/Oppcomp.css"
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
        title="Application"
        status= "Pending"
        />
        <Application
        id="oppid1"
        title="Application"
        status= "Pending"
        />
        <Application
        id="oppid7"
        title="Application"
        status= "Pending"
        />
        <Application
        id="oppid7"
        title="Application"
        status= "Pending"
        />
        <Application
        id="oppid7"
        title="Application"
        status= "Pending"
        />
        <Application
        id="oppid7"
        title="Application"
        status= "Pending"
        />
    </div>
    </>
  )
}

export default Borrow