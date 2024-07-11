const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with HTTP status and Content-Type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Route handling
  if (req.url === '/') {
    res.end('Hello, World!\n');
  } else if (req.url === '/about') {
    res.end('This is the about page.\n');
  } else {
    res.statusCode = 404;
    res.end('Page not found.\n');
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
