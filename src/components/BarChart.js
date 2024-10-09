import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { fetchBarChartData } from '../services/api';

const BarChartComponent = ({ month }) => {
    const [barChartData, setBarChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchBarChartData(month);

            // Log the data you are receiving to see its structure
            console.log('Raw API Data:', data);

            // Transform the object into an array of { name, value } objects
            if (data && typeof data === 'object') {
                const transformedData = Object.keys(data).map((key) => ({
                    name: key,       // e.g., "0-100"
                    value: data[key] // e.g., 5
                }));

                console.log('Transformed Data:', transformedData); // Log transformed data for debugging
                setBarChartData(transformedData);
            }
        };
        fetchData();
    }, [month]);

    return (
        <div>
            <h2>Price Range Distribution</h2>
            {/* Render BarChart only if data is available */}
            {barChartData.length > 0 ? (
                <BarChart width={600} height={300} data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
            ) : (
                <p>Loading chart data...</p>  // Show a loading message while data is being fetched
            )}
        </div>
    );
};

export default BarChartComponent;
