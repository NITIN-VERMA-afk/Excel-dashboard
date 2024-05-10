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

const RevenueUkPk = () => {
  const [ukData, setUkData] = useState([]);
  const [phData, setPhData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/SalesworkbookToJson');
      
        if (data && data.Data) {
          const ukSales = data.Data.filter(item => item.Region === 'UK');
          const phData = ukSales.map(item => ({ Date: item['Sale Date'], Revenue: item['Revenue Per Hour'] }));
  
          setUkData(ukSales);
          setPhData(phData);
          console.log('UK Data:', ukSales);
          console.log('PH Data:', phData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []); 

  const options = {
    indexAxis: 'y', 
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Revenue Comparison',
      },
    },
  };

  const ukChartData = {
    labels: ukData.map(item => item.Date),
    datasets: [{
      label: 'UK Revenue',
      data: ukData.map(item => item.Revenue),
      backgroundColor: 'rgba(0, 123, 255, 0.5)',
      borderColor: 'rgba(0, 123, 255, 1)',
      borderWidth: 1,
    }]
  };

  const phChartData = {
    labels: phData.map(item => item.Date),
    datasets: [{
      label: 'PH Revenue Per Hour',
      data: phData.map(item => item["Revenue Per Hour"]),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    }]
  };
  

  return (
    <div className="chart-container" style={{ maxWidth: '800px', margin: 'auto' }}>
      <div>
        <Bar data={ukChartData} options={options} />
      </div>
      <div>
        <Bar data={phChartData} options={options} />
      </div>
    </div>
  );
};

export default RevenueUkPk;







