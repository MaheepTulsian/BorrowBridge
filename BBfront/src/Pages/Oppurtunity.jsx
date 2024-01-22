import React from 'react'
import { useParams } from 'react-router-dom';

const Oppurtunity = () => {
    const { id } = useParams();
  return (
    <div>Oppurtunity {id}</div>
  )
}

export default Oppurtunity