import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

function WorkbookDisplay() {
  const [workbookData, setWorkbookData] = useState(null);
  const [error, setError] = useState(null);

  chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/workbookToJson"
        );
        console.log("Response:", response.data);
        setWorkbookData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!workbookData) {
    return <div>Loading...</div>;
  } else if (!workbookData.Sheet1 || workbookData.Sheet1.length === 0) {
    console.log("No data available:", workbookData);
    return <div>No data available</div>;
  } else {
   
    const data = {
      labels: workbookData.Sheet1.map((item) => item["Personal Budget"]),
      datasets: [
        {
          label: "Amount",
          data: workbookData.Sheet1.map((item) => item["__EMPTY"]),
          backgroundColor: "aqua",
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    };

    const options = {};
    

    return (
      <div>
        <h2>Workbook Data</h2>

        <div
          style={{
            padding: "20px",
            width: "100%",
            height: "80%",
          }}
        >
          <Bar data={data} options={options} />
        </div>
      </div>
    );
  }
}

export default WorkbookDisplay;

