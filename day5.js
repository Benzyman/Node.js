// Import the 'fs' module for file system operations
const fs = require('fs');

// Set a timer with a delay of 0 milliseconds
setTimeout(() => {
  console.log('Timer 1 executed');
}, 0);

// Set an immediate callback
setImmediate(() => {
  console.log('Immediate 1 executed');
});

// Schedule a promise to be resolved
Promise.resolve().then(() => {
  console.log('Promise 1 resolved');
});

// Read a file asynchronously
fs.readFile(__filename, () => {
  console.log('File read completed');

  // Set a timer inside the file read callback
  setTimeout(() => {
    console.log('Timer 2 executed');
  }, 0);

  // Schedule another promise to be resolved inside the file read callback
  Promise.resolve().then(() => {
    console.log('Promise 2 resolved');
  });
});
// Schedule another promise to be resolved
Promise.resolve().then(() => {
  console.log('Promise 3 resolved');
});

console.log('Script start');
