import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: [], 
    datasets: [
      {
        data: [75,25],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const options = {
    responsive: true, 
    plugins: {
      legend: {
        position: 'top', 
      },
      tooltip: {
        enabled: true, 
      },
    },
    animation: {
      animateScale: true, 
    },
  };

  return (
    <div className='w-40'> 
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;


