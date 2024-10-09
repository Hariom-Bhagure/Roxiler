const mongoose = require('mongoose');

// Define the transaction schema based on the third-party data
const transactionSchema = new mongoose.Schema({
    id: { type: Number, required: true }, // Use 'id' instead of 'productId'
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String },
    image: { type: String },
    sold: { type: Boolean, required: true },
    dateOfSale: { type: Date, required: true }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
