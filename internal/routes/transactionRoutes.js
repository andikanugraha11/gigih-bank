const express = require('express');
const TransactionController = require('../controllers/transactionController');

const router = express.Router();

router.post('/', TransactionController.transfer);

// TODO: Add route to get all transactions

module.exports = router;