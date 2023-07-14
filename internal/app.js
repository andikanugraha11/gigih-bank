const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const customerRoutes = require('./routes/customerRoutes');
const transactionRoutes = require('./routes/transactionRoutes');


app.use(bodyParser.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);


apiRoutes.use('/customers', customerRoutes);
apiRoutes.use('/transaction', transactionRoutes);


module.exports = app;