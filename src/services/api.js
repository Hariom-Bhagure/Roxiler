// src/services/api.js

import axios from 'axios';

// Set the base URL for your backend API
const API_URL = 'http://localhost:5000/api/transactions';

// Fetch transactions with pagination and search
export const fetchTransactions = async (month, page, perPage, search) => {
    const response = await axios.get(`${API_URL}/list`, {
        params: { month, page, perPage, search }
    });
    return response.data;
};

// Fetch statistics for a given month
export const fetchStatistics = async (month) => {
    const response = await axios.get(`${API_URL}/statistics`, {
        params: { month }
    });
    return response.data;
};

// Fetch data for the price range bar chart
export const fetchBarChartData = async (month) => {
    const response = await axios.get(`${API_URL}/bar-chart`, {
        params: { month }
    });
    return response.data;
};

// Fetch data for the category pie chart
export const fetchPieChartData = async (month) => {
    const response = await axios.get(`${API_URL}/pie-chart`, {
        params: { month }
    });
    return response.data;
};
