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

const FeedbackChart = () => {
  const [callData, setCallData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/SalesworkbookToJson");
        setCallData(response.data.Data);
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

  // Create arrays to store positive and negative feedback counts for each salesman
  const positiveFeedback = callData.map(item => item.Positive);
  const negativeFeedback = callData.map(item => item.Negative);

  const data = {
    labels: callData.map(item => item.Salesman), 
    datasets: [
      {
        label: "Positive Feedback",
        data: positiveFeedback,
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        borderColor: "blue",
        borderWidth: 1,
      },
      {
        label: "Negative Feedback",
        data: negativeFeedback,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "red",
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
    <div style={{ padding: "20px", width: "100%", height: "500px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default FeedbackChart;


