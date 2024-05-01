import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const GoogleData = () => {
  const [GoogleData, setGoogleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/MarketingworkbookToJson");
        setGoogleData(response.data.Google);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const dates = GoogleData.map(entry => entry.DATE);
  const directData = GoogleData.map(entry => entry.DIRECT);
  const organicData = GoogleData.map(entry => entry.ORGANIC);
  const referralData = GoogleData.map(entry => entry.REFERRAL);
  const paidData = GoogleData.map(entry => entry.PAID);
  const otherData = GoogleData.map(entry => entry.OTHER);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Direct',
        data: directData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Organic',
        data: organicData,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Referral',
        data: referralData,
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
      },
      {
        label: 'Paid',
        data: paidData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Other',
        data: otherData,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  return (
    <div>
      
      <Line data={chartData} />
    </div>
  );
};

export default GoogleData;
