const express = require('express');
const connectDB = require('./config/db');
const transactionRoutes = require('./routes/transactionRoutes'); // Import the transaction routes
require('dotenv').config();  // Load environment variables from .env
const cors = require('cors');  // Import cors


const app = express();

app.use(cors());  // Enable CORS for all requests


// Connect to MongoDB   
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Register the transaction routes with a base URL of '/api/transactions'
app.use('/api/transactions', transactionRoutes);

// A basic default route for testing if the server is running
app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;
