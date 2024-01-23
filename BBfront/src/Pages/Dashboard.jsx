import React, { useEffect, useState } from 'react';
import "./page.css";
import Cards from '../Components/Cards';

const Dashboard = () => {
  const [opps, setOpps] = useState([]);

  const fetchAllOpps = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/opps/allopps');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setOpps(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error, set opps to an empty array or handle it as needed
    }
  };

  useEffect(() => {
    fetchAllOpps();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
    <div className="card-grid">
    <Cards
          key={item._id}
          id={item._id}
          title={item.title}
          price="10"
          interest="15%"
        />
        <Cards
          key={item._id}
          id={item._id}
          title={item.title}
          price="10"
          interest="15%"
        />
        <Cards
          key={item._id}
          id={item._id}
          title={item.title}
          price="10"
          interest="15%"
        />
      {opps.map(item => (
        <Cards
          key={item._id}
          id={item._id}
          title={item.title}
          price="10"
          interest="15%"
        />
      ))}
       </div>
    </>
  );
};

export default Dashboard;
