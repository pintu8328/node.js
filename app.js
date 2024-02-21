const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    fs.readFile('about.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }
      res.write('<html lang="en">');
      res.write('<head><title>Document</title> </head>');
      res.write(`<body>${data}<br><form action="/about" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form> </body>`);
      res.write('</html>');
      return res.end();
    });
  } else if (url === '/about' && method == 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log("data", chunk)
      body.push(chunk)
    })
    req.on('end', () => {
      let parsedData = Buffer.concat(body).toString();
      console.log(parsedData)
      const message = parsedData.split("=")[1]
      console.log(message)
      fs.writeFile('about.txt', message, (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end('Internal Server Error');
          return;
        }
        res.statusCode = 302;
        res.setHeader('location', '/')
        fs.readFile('about.txt', 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
          }
          res.write('<html lang="en">');
          res.write('<head><title>Document</title> </head>');
          res.write(`<body>${data}<br><form action="/about" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form> </body>`);
          res.write('</html>');
          return res.end();
        });
        return res.end();
      })
    })
  } else if (url === '/node') {
    res.end('Welcome to my Node.js project');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
