import React from 'react'
import Cards from '../Components/Cards'

const Dashboard = () => {
  return (
    <>
    <div className="card-grid">
    <Cards
    id="TEST0"
    title="Sample 1"
    price="10 GoETH"
    interest="15%"
    />
    <Cards
    id="TEST1"
    title="Sample 2"
    price="20 GoETH"
    interest="18%"
    />
    <Cards
    id="TEST3"
    title="Sample 2"
    price="20 GoETH"
    interest="18%"
    />
    </div>
    </>
  )
}

export default Dashboard