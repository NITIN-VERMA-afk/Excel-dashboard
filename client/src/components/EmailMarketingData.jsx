import React, { useState, useEffect } from "react";
import axios from "axios";

const EmailMarketingDashboard = () => {
  const [Emaildata, setEmailData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/MarketingworkbookToJson");
        // console.log("Response from API:", response.data); 
        setEmailData(response.data.DASHBOARD); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <table border="1">
      <thead>
        <tr>
          <th>CAMPAIGN</th>
          <th>SENT</th>
          <th>OPENS</th>
          <th>CLICKS</th>
          <th>BOUNCES</th>
          <th>UNSUBS</th>
        </tr>
      </thead>
      <tbody>
        {Emaildata.map((campaign, index) => (
          <tr key={index}>
            <td>{campaign.__EMPTY_7}</td>
            <td>{campaign.__EMPTY_8}</td>
            <td>{campaign.__EMPTY_9}</td>
            <td>{campaign.__EMPTY_10}</td>
            <td>{campaign.__EMPTY_11}</td>
            <td>{campaign.__EMPTY_12}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmailMarketingDashboard;

