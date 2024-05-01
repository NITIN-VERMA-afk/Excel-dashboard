import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';

const ESubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/MarketingworkbookToJson"
        );
        setSubscribers(response.data.Google);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const dates = subscribers.map(entry => entry.DATE);
  const directData = subscribers.map(entry => entry.DIRECT);
  

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Direct',
        data: directData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
     
    ],
  };

  return (
    <div>
      <h2>Subscribers Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ESubscribers;


