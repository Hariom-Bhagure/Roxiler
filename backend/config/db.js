const mongoose = require('mongoose');

// Replace the connection string directly in the code
const MONGO_URI = 'mongodb+srv://hariom_bhagure:hariom9997@cluster0.pqxnled.mongodb.net/'; // Example URI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);  // Exit process with failure
    }
};

module.exports = connectDB;
