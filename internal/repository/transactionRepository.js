const {generateID} = require('../utils/generator');

let transactions = [];

class TransactionRepository {
    constructor(transactionID, sourceID, destinationID, amount, timestamp) {
        this.transactionID = transactionID;
        this.sourceID = sourceID;
        this.destinationID = destinationID;
        this.amount = amount;
        this.timestamp = timestamp;
    }

    static getTransactions() {
        return transactions;
    }

    static addTransaction(sourceID, destinationID, amount) {
        const transactionID = generateID();
        const newTransaction = new TransactionRepository(transactionID, sourceID, destinationID, amount, new Date().toISOString());
        transactions.push(newTransaction);
        return newTransaction;
    }
}


module.exports = TransactionRepository;