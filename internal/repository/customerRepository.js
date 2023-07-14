const {generateID} = require('../utils/generator');

let customers = [];

class CustomerRepository {
  constructor(custumerID, name, email, balance) {
    this.custumerID = custumerID;
    this.name = name;
    this.email = email;
    this.balance = balance;
  }

  static getCustomers() {
    return customers;
  }

  static getCustomer(id) {
    return customers.find(customer => customer.custumerID === id);
  }

  static addCustomer(name, email, balance) {
    const custumerID = generateID();
    const newCustomer = new CustomerRepository(custumerID, name, email, balance);
    customers.push(newCustomer);
    return newCustomer;
  }
}

module.exports = CustomerRepository;