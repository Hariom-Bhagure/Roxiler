import React, { useState } from 'react';
import './App.css';  // Import CSS for styling
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart.js';

const App = () => {
    const [month, setMonth] = useState(3);  // Default month is March

    return (
        <div className="app-container">
            <h1 className="app-title">MERN Stack Coding Challenge</h1>

            <div className="month-selector">
                <label>
                    Select Month:
                    <select value={month} onChange={(e) => setMonth(e.target.value)} className="month-dropdown">
                        <option value={1}>January</option>
                        <option value={2}>February</option>
                        <option value={3}>March</option>
                        <option value={4}>April</option>
                        <option value={5}>May</option>
                        <option value={6}>June</option>
                        <option value={7}>July</option>
                        <option value={8}>August</option>
                        <option value={9}>September</option>
                        <option value={10}>October</option>
                        <option value={11}>November</option>
                        <option value={12}>December</option>
                    </select>
                </label>
            </div>

            <Statistics month={month} />
            <TransactionTable month={month} />
            <PieChart month={month} />
        </div>
    );
};

export default App;
