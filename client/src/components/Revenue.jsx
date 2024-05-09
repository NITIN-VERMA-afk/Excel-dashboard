import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Revenue = () => {
    const [revenueData, setRevenueData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/SalesworkbookToJson");
                setRevenueData(response.data.Data);  
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Salesman</th>
                        <th>Revenue</th>
                        <th>Rev PH</th>
                        <th>Sales</th>
                        <th>Sales PH</th>
                    </tr>
                </thead>
                <tbody>
                    {revenueData.length > 0 ? (
                        revenueData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.Salesman}</td>
                                <td>{data.Revenue}</td>
                                <td>{data["Revenue Per Hour"]}</td>
                                <td>{data.Sales}</td>
                                <td>{data["Sales Per Hour"]}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Loading data...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Revenue;


