const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/home') {
    res.end('Welcome home');
  } else if (url === '/about') {
    res.end('Welcome to About Us page');
  } else if (url === '/node') {
    res.end('Welcome to my Node.js project');
  } else {
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 4000');
});
