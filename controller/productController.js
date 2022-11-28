const ProductModal = require('../models/productModels');
const { errorMessage } = require('../shared/errorHandlingfile');

/**
 * @descritpion Get all products from the collection of products
 * @param req
 * @param res
 * @API api/getProducts
 * @returns all products
 */
async function getProducts(req, res) {
    try {
        const products = await ProductModal.findAll();
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
    } catch(e) {
        console.log(e)
    }
}
/**
 * @descritpion Get a single products from the collection of products, by id from the url
 * @param req
 * @param res
 * @API api/getProducts/:id
 * @returns single product
 */
async function getProduct(req, res, id) {
    try {
        const resultObj = await ProductModal.findById(id);
        if (resultObj) {
            res.writeHead(200, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(resultObj));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(errorMessage('Product')));
        }
    } catch(e) {
        console.log(e)
    }
}
/**
 * @descritpion Inserting new data to the product table
 * @param req
 * @param res
 * @returns Inserted Data with Id
 */
async function createProduct(req, res) {
    const product = {
        name: "Test Data",
        description: "new data entry",
        price: 12
    }
    const newProduct = ProductModal.create(product);
    res.writeHead(201, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(newProduct));
}
module.exports = {
    getProducts,
    getProduct,
    createProduct
}