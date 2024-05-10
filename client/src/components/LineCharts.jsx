import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'; // Uncomment this line
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'; 
import axios from 'axios';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/MarketingworkbookToJson');
  //       setData(response.data.Google);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (data.length === 0) {
  //   return <div>Loading...</div>;
  // }

  // const dates = data.map(entry => entry.DATE);
  // const directData = data.map(entry => entry.DIRECT);

  const chartData = {
    labels: ['2-3-2021', '16-3-2023', '30-3-2023', '5-4-2023', '20-4-2023', '10-5-2023'],
    datasets: [
      {
        label: 'directData',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'aqua',
        pointBorderColor: 'aqua',
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      // y: {
      //   min: 3,
      //   max: 6,
      // },
    },
  };

  return (
    <div>
      <div style={{ padding: '20px', width: '100%', height: '80%' }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineChart;


