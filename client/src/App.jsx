import React, { useState } from "react";
import axios from "axios";
import MarketingDashboard from "./components/MarketingDashboard";
import SalesDashboard from "./components/SalesDashboard";
import DropdownButton from "./components/DropDownButton";
import { FaEye, FaMinus, FaPlus } from "react-icons/fa";
import "./App.css";

function App() {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [newValue, setNewValue] = useState("");

  const togglePanel = () => {
    setIsPanelVisible(prevState => !prevState);
  };

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const submitData = () => {
    axios
      .post("http://localhost:3000/updateCell", { newValue })
      .then(response => {
        console.log("Data updated successfully:", response.data);
      })
      .catch(error => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <div className="container">
      <div className={`dashboard-container ${isPanelVisible ? "panel-open" : ""}`}>
        <MarketingDashboard />
        <SalesDashboard />
      </div>

      <div className="fixed top-10 right-10 z-50 flex justify-between gap-2 bg-black text-white">
        <button onClick={() => setIframeHeight("50px")}>
          <FaMinus />
        </button>
        <button onClick={() => setIframeHeight("100vh")}>
          <FaPlus />
        </button>
        <DropdownButton />
        <button onClick={togglePanel}>
          <FaEye />
        </button>
      </div>

      {isPanelVisible && (
        <div className="side-panel bg-black text-white">
          <div className="mt-20">
            <ul className="flex flex-col justify-around">
              <li className="flex items-center mb-2">
                <span className="w-20">Analysis</span>
                <input
                  type="text"
                  className="flex-grow ml-2 border border-gray-300 rounded px-2 py-1"
                  value={newValue}
                  onChange={handleChange}
                  placeholder="Enter analysis data"
                />
              </li>
              {/* Add other list items here */}
            </ul>

            <div className="flex justify-end mt-3">
              <button onClick={submitData}>Submit</button>
            </div>
          </div>

          <div>
            <h3>Downloads</h3>
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

