const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

function hello(name){
   console.log("Hello "+name)
}

function process_request(req, res){
  hello("Yuki")
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}

var server = http.createServer(process_request);
server.listen();
