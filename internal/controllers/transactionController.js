const TransactionService = require('../services/transactionService');

class TransactionController {
    static transfer(req, res) {
        try {
            const { sourceID, destinationID, amount } = req.body;
            const transaction = TransactionService.transfer(sourceID, destinationID, amount);
            res.status(201).json(transaction);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = TransactionController;