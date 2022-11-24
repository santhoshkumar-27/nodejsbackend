// console.log('hello world');
const products = require('./data/products.json');
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const reqMethod = req.method;
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>Hello world</h1>');
    // res.end();
    // res.writeHead(200, { 'Content-Type': 'application/json'});
    // res.end(JSON.stringify(products));
    console.log(req.url, req.method);
    if (url === '/api/products' && reqMethod === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            message: 'The route not found'
        }));
    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on the port ${PORT}`))