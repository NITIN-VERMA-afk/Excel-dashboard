import { useState, useEffect } from "react";
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

const SalesDashboard = () => {
  const [salesData, setSalesData] = useState(null);
  const [error, setError] = useState(null);

  chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/SalesworkbookToJson");
        console.log("Response:", response.data);
        setSalesData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!salesData) {
    return <div>Loading...</div>;
  } else if (!salesData.DASHBOARD || salesData.DASHBOARD.length === 0) {
    console.log("No data available:", salesData);
    return <div>No data available</div>;
  } else {
    const salesChartData = {
        labels: salesData.DASHBOARD.map((item) => item["All Products"]),
        datasets: [
          {
            label: "Revenue",
            data: salesData.DASHBOARD.map((item) => item["Revenue"]),
            backgroundColor: "aqua",
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      };
      

    const options = {};

    return (
      <div>
        <div className="">
          <div className=" bg-white p-4 w-1/4">
            <div className="bg-lime-500 flex justify-center items-center gap-11">
              <p>Emailmarketing</p>
              <button className="bg-black text-lime-500">Results</button>
            </div>
            <div className="bg-gray-500 flex justify-center mt-4">
              <h2 className="text-black">SUBSCRIBERS </h2>
            </div>
            <div className="flex justify-center">
              <h1 className="text-black">6,537</h1>
            </div>
            <div className="text-black flex justify-center items-center gap-5">
              <p>
                vs YESTERDAY <br /> +3
              </p>
              <p>
                vs Last Week <br /> +5{" "}
              </p>
            </div>
            <div>
              <div
                style={{
                  padding: "20px",
                  width: "100%",
                  height: "80%",
                }}
              >
                <Bar data={salesChartData} options={options} />
              </div>
            </div>
          </div>

          {/* chart 2 */}
          <div className="bg-white w-2/4">
          <div className="bg-lime-500 flex justify-center items-center gap-11">
              <p>Emailmarketing</p>
              <button className="bg-black text-lime-500">Results</button>
            </div>
          </div>

          {/* chart 3 */}
          <div className="bg-white p-4 w-1/4">
          <div className="bg-lime-500 flex justify-center items-center gap-11">
              <p>Emailmarketing</p>
              <button className="bg-black text-lime-500">Results</button>
            </div>
            <div className="bg-gray-500 flex justify-center mt-4">
              <h2 className="text-black">SUBSCRIBERS </h2>
            </div>

          </div>
        </div>
      </div>
    );
  }
};

export default SalesDashboard;
