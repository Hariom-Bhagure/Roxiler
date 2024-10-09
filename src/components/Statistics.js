// src/components/Statistics.js

import React, { useEffect, useState } from 'react';
import { fetchStatistics } from '../services/api';

const Statistics = ({ month }) => {
    const [statistics, setStatistics] = useState({
        totalSalesAmount: 0,
        totalSoldItems: 0,
        totalUnsoldItems: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchStatistics(month);
            setStatistics(data);
        };

        fetchData();
    }, [month]);

    return (
        <div>
            <h2>Statistics for {month}</h2>
            <p>Total Sales: ${statistics.totalSalesAmount}</p>
            <p>Total Sold Items: {statistics.totalSoldItems}</p>
            <p>Total Unsold Items: {statistics.totalUnsoldItems}</p>
        </div>
    );
};

export default Statistics;
