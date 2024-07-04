// Requiring fs module in which 
// readFile function is defined.
const fs = require('fs');

fs.readFile('text.txt', (err, data) => {
if (err) throw err;

console.log(data.toString());
});
