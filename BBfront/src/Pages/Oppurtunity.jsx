import React from 'react'
import { useParams } from 'react-router-dom';
import Right from "../Components/Right"
import Left from '../Components/Left';
import './Page.css'

const Oppurtunity = () => {
    const { id } = useParams();
  return (
    <>
    <div className="boxforopp">
      <div className="boxopri">
        <Right/>
      </div>
      <div className="boxople">
        <Left/>
      </div>
    </div>
    </>
  )
}

export default Oppurtunity