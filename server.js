// console.log('hello world');
// const products = require('./data/products.json');
const http = require('http');
const { getProducts } = require('./controller/productController');
const { requestMethods } = require('./shared/constant');
const { getProdRegex } = require('./shared/regexUrl');
const { urlMatch } = require('./shared/urlMatch');

const server = http.createServer((req, res) => {
    const url = req.url;
    const reqMethod = req.method;
    if (url === '/api/products' && reqMethod === requestMethods.GET) {
        getProducts(req, res);
    } else if (urlMatch(url, getProducts) && requestMethods.GET) {
        const id = parseFloat(urlMatch(url, getProducts)[1]);
        console.log(id);
        // getProducts()
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            message: 'The route not found'
        }));
    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on the port ${PORT}`))