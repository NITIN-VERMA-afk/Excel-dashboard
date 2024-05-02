import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevennueUkPk = () => {
  const [hChartData, setHChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/SalesworkbookToJson');
        
        setHChartData({
          labels: '', 
       
          datasets: [
            {
              label: 'Revenue', 
              data: response.data.map(item => item.Hours), 
              backgroundColor: 'black',
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

  const options = {
    indexAxis: 'y', 
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      
    },
  };

  return (
    <div>
      <div className='chart-container' style={{ maxWidth: '600px', margin: 'auto' }}>
        <Bar data={hChartData} options={options} />
      </div>
    </div>
  );
};

export default RevennueUkPk;



