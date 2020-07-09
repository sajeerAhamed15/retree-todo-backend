const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || process.argv[2] || 8080;


const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, function() {
  console.log('Server running at:' + port + '/');
});