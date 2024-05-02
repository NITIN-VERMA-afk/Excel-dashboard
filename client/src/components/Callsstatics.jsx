import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CallsStatistics = () => {
    const [callData, setCallData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/SalesworkbookToJson");
                setCallData(response.data.Calcs);  
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error loading the data!</div>;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Salesman</th>
                        <th>Calls</th>
                        <th>Positive</th>
                        <th>Negative</th>
                        <th>All Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan="5">Loading data...</td>
                        </tr>
                    ) : callData.length > 0 ? (
                        callData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.Salesman}</td>
                                <td>{data.Calls}</td>
                                <td>{data["Positive Calls"]}</td>
                                <td>{data["Negative Calls"]}</td>
                                <td>{data.Revenue}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No data available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CallsStatistics;

