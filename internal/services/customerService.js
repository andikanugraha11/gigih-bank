const CustomerRepository = require('../repository/customerRepository');

class CustomerService {
    static getCustomers() {
        return CustomerRepository.getCustomers();
    }

    static getCustomer(id) {
        return CustomerRepository.getCustomer(id);
    }

    static addCustomer(name, email, balance) {
        // TODO: validate customer data
        // TODO: check if customer already exists
        return CustomerRepository.addCustomer(name, email, balance);
    }
}

module.exports = CustomerService;