const fs = require('fs');
const path = require('path');

function readConfig() {
    const configPath = path.join(__dirname, '..', 'config', 'development.json');
    const rawConfig = fs.readFileSync(configPath)
    const config = JSON.parse(rawConfig);
    return config;
}

module.exports = readConfig();