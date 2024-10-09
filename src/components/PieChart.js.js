import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { fetchPieChartData } from '../services/api';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const PieChartComponent = ({ month }) => {
    const [pieChartData, setPieChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPieChartData(month);
            setPieChartData(data.map((item, index) => ({ name: item._id, value: item.count, color: COLORS[index % COLORS.length] })));
        };
        fetchData();
    }, [month]);

    return (
        <div>
            <h2>Category Distribution</h2>
            <PieChart width={400} height={400}>
                <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8">
                    {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default PieChartComponent;
