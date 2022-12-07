
const http = require('http');
const { getProducts, getProduct, createProduct, updateProduct } = require('./controller/productController');
const { requestMethods } = require('./shared/constant');
const { getProdRegex, updateProdRegex } = require('./shared/regexUrl');
const { urlMatch } = require('./shared/urlMatch');
const { errorMessage } = require('./shared/errorHandlingfile');
const { productURl } = require('./shared/collectionURL')


const server = http.createServer((req, res) => {
    const url = req.url;
    const reqMethod = req.method;
    if (url === productURl.get && reqMethod === requestMethods.GET) {
        getProducts(req, res);
    } else if (urlMatch(url, getProdRegex) && requestMethods.GET) {
        const id = urlMatch(url, getProdRegex)[1];
        getProduct(req, res, id);
    } else if (url === productURl.post && requestMethods.POST) {
        createProduct(req, res);
    } else if (urlMatch(url, updateProdRegex) && requestMethods.PUT) {
        const id = urlMatch(url, updateProdRegex)[1];
        updateProduct(req, res, id);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(errorMessage('The route')));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on the port ${PORT}`))