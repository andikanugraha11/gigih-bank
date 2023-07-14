const CustomerService = require('../services/customerService');

class CustomerController {
    static getCustomers(req, res) {
        const customers = CustomerService.getCustomers();
        res.json(customers);
    }

    static addCustomer(req, res) {
        const { name, email, balance } = req.body;
        const customer = CustomerService.addCustomer(name, email, balance);
        res.status(201).json(customer);
    }
}

module.exports = CustomerController;