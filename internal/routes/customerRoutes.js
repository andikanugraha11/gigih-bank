const express = require('express');
const CustomerController = require('../controllers/customerController');

const router = express.Router();

router.get('/', CustomerController.getCustomers);
router.post('/', CustomerController.addCustomer);

module.exports = router;