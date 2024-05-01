import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import axios from 'axios';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/MarketingworkbookToJson');
        setData(response.data.Calc);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  const dates = data.map(item => item.Date);
  const subscribers = data.map(item => item.Subscribers);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Subscribers',
        data: subscribers,
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
      y: {
        min: 3,
        max: 6,
      },
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

