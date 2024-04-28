import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WorkbookDisplay from "./components/WorkbookDisplay";

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
      
     <WorkbookDisplay/>
     

      <div className="buttons-container">
        <button onClick={() => setIframeHeight("50px")}>-</button>
        <button onClick={() => setIframeHeight("100vh")}>+</button>
        <button >Download</button>
        <button onClick={togglePanel}>
          {isPanelVisible ? "Hide Panel" : "Show Panel"}
        </button>
      </div>
      {isPanelVisible && (
        <div className="side-panel">
          <h2>Data Tools</h2>
          <div>
            <input
              type="text"
              value={newValue}
              onChange={handleChange}
              placeholder="Enter projections data"
            />
            <button onClick={submitData}>Update Excel</button>
          </div>
          <div>
            <h3>Actions</h3>
            <ul>
              <li>Maximize View</li>
              <li>Minimize View</li>
              <li>Custom Action</li>
            </ul>
          </div>
          <div>
            <h3>Files</h3>
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
