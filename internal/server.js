const app = require('./app');
const config = require('./config');

const port = config.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});