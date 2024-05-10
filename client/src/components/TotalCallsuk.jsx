import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TotalCallsuk = () => {
    const [CallsData, setCallsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/SalesworkbookToJson");
          setCallsData(response.data.Data);
          console.log(CallsData)
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setError(error);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading the chart data!</p>;
  
    const data = {
      labels: CallsData.map(item => item.Salesman), 
      datasets: [
        {
          label: "Sales Amount",
          data: CallsData.map(item => item.Calls),
          backgroundColor: "rgba(0, 123, 255, 0.5)",
          borderColor: "blue",
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      plugins: {
        legend: {
          position: 'top', 
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  return (
    <div>
        <div>
      <div className="flex justify-between">
        <p>Total calls uk</p>
        <p>calls-salesph</p>
      </div>
      <div style={{ padding: "20px", width: "100%", height: "500px" }}>
      <Bar data={data} options={options} />
      </div>
    </div>
      
    </div>
  )
}

export default TotalCallsuk
