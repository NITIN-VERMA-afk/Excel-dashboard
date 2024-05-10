import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Revenue = () => {
    const [revenueData, setRevenueData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/SalesworkbookToJson");
                if (response.data && response.data.Data) {
                    const uniqueSalesmen = new Set();
                    const filteredData = response.data.Data.filter(entry => {
                        if (!uniqueSalesmen.has(entry.Salesman)) {
                            uniqueSalesmen.add(entry.Salesman);
                            return true;
                        }
                        return false;
                    });
                    setRevenueData(filteredData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <table>
                <thead className='bg-blue-600'>
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
                            <tr className='bg-blue-500' key={index}>
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


