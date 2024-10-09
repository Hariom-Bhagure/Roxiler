// const express = require('express');
// const router = express.Router();
// const { initializeDatabase } = require('../controllers/transactionController');

// // Route to initialize the database
// router.get('/initialize', initializeDatabase);

// module.exports = router;


const express = require('express');
const {
    listTransactions,
    getStatistics,
    getPriceRangeData,
    getCategoryData
} = require('../controllers/transactionController');

const router = express.Router();

router.get('/list', listTransactions);         // GET /api/transactions/list?month=&page=&perPage=&search=
router.get('/statistics', getStatistics);      // GET /api/transactions/statistics?month=
router.get('/bar-chart', getPriceRangeData);   // GET /api/transactions/bar-chart?month=
router.get('/pie-chart', getCategoryData);     // GET /api/transactions/pie-chart?month=

module.exports = router;
