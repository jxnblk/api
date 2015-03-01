
var fs = require('fs');

var data = require('./index.js');

fs.writeFileSync('index.json', JSON.stringify(data));
