import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Right } from '../Components/Right';
import { Left } from '../Components/Right';
import './Page.css';

const Opportunity = () => {
  const { id } = useParams();
  const [opportunityData, setOpportunityData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3000/api/opps/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setOpportunityData(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Error fetching opportunity data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="boxforopp">
          <div className="boxopri">
            <Right
              title={opportunityData[0].title}
              img={opportunityData[0].Thumbnail}
              pitch={opportunityData[0].pitch_Pdf}
              desc={opportunityData[0].Description}
              location={opportunityData[0].Location}
            />
          </div>
          <div className="boxople">
            <Left />
          </div>
        </div>
      )}
    </>
  );
};

export default Opportunity;
