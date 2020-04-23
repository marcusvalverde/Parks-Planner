const fs = require('fs');
const path = require('path');

const allParks = JSON.parse(fs.readFileSync(path.resolve(__dirname, './test.json')));