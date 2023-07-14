const CustomerRepository = require('../repository/customerRepository');
const TransactionRepository = require('../repository/transactionRepository');

class TransactionService {
    static transfer(sourceID, destinationID, amount) {
        const source = CustomerRepository.getCustomer(sourceID);
        const destination = CustomerRepository.getCustomer(destinationID);

        if (!source) {
            throw new Error('Source customer does not exist');
        }

        if (!destination) {
            throw new Error('Destination customer does not exist');
        }

        source.balance -= amount;
        destination.balance += amount;

        return TransactionRepository.addTransaction(sourceID, destinationID, amount);  
    }
}

module.exports = TransactionService;