import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import WorkbookDisplay from "./components/WorkbookDisplay";
import { FaEye } from "react-icons/fa";

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import DropdownButton from "./components/DropDownButton";
// import SalesDashboard from "./components/SalesDashboard";
import MarketingDashboard from "./components/MarketingDashboard";
import EmailMarketingData from "./components/EmailMarketingData"


function App() {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [iframeHeight, setIframeHeight] = useState("");
  const [newValue, setNewValue] = useState("");

  const togglePanel = () => {
    setIsPanelVisible((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const submitData = () => {
    axios
      .post("http://localhost:3000/updateCell", { newValue })
      .then((response) => {
        console.log("Data updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <div className="container">
      {/* <WorkbookDisplay /> */}
      <div className="">
      <MarketingDashboard />
     

      </div>
      

      <div className="fixed top-10 right-10 z-50 flex justify-between gap-2">
        <button onClick={() => setIframeHeight("50px")}>
          <FaMinus />
        </button>
        <button onClick={() => setIframeHeight("100vh")}>
          <FaPlus />
        </button>

        <p className="">
          
          <DropdownButton />
        </p>

        <button onClick={togglePanel}>
          <FaEye />
        </button>
      </div>
      {isPanelVisible && (
        <div className="side-panel">
          <div>
            <div className="mt-20">
              <ul className="flex flex-col justify-around">
                <li className="flex items-center mb-2">
                  <span className="w-20">Analysis</span>
                  <input
                    type="text"
                    className="flex-grow ml-2 border border-gray-300 rounded px-2 py-1"
                  />
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-20">Outliners</span>
                  <input
                    type="text"
                    className="flex-grow ml-2 border border-gray-300 rounded px-2 py-1"
                  />
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-20">Highlights</span>
                  <input
                    type="text"
                    className="flex-grow ml-2 border border-gray-300 rounded px-2 py-1"
                  />
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-20">RGY</span>
                  <input
                    type="text"
                    className="flex-grow ml-2 border border-gray-300 rounded px-2 py-1"
                  />
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-20">Actions</span>
                  <input
                    type="text"
                    className="flex-grow ml-2 border border-gray-300 rounded px-2 py-1"
                  />
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-20">Trends</span>
                  <input
                    type="text"
                    className="flex-grow ml-2 border border-gray-300 rounded px-2 py-1"
                  />
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-20">Interactions</span>
                  <input
                    type="text"
                    className="flex-grow ml-2 border border-gray-300 rounded px-2 py-1"
                  />
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-20">Projections</span>
                  <input
                    type="text"
                    value={newValue}
                    onChange={handleChange}
                    placeholder="Enter projections data"
                  />
                </li>
              </ul>
            </div>

            <div className="flex justify-end mt-3">
              <button onClick={submitData}>Submit</button>
            </div>
          </div>

          <div>
            <h3>Dowenloads</h3>
            <p>File management section could be here.</p>
          </div>
          <div>
            <h3>Chat</h3>
            <p>Internal chat component could be here.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
