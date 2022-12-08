const ProductModal = require('../models/productModels');
const { errorMessage, updateMessage } = require('../shared/errorHandlingfile');
const { getBodyString, processBody } = require('../shared/getBodyString');
/**
 * @descritpion Get all products from the collection of products
 * @param req
 * @param res
 * @API api/getProducts
 * @Method GET
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
 * @Method GET
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
            res.end(JSON.stringify(errorMessage('Product Not Found')));
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
 * @API api/createProduct
 * @Method POST
 * @payload { name: "Test Data", description: "test description", price: test prize }
 */
async function createProduct(req, res) {
    const body = await getBodyString(req);
    const product = await ProductModal.create(body);
    res.writeHead(201, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(product));
}
/**
 * @descritpion updating data with id or if id not found it will create a new entry
 * @param req
 * @param res
 * @returns updated Data with message
 * @API api/updateProduct/:id
 * @Method PUT
 */
async function updateProduct(req, res, id) {
    const resultObj = await ProductModal.findById(id);
    if (resultObj) {
        const body = await getBodyString(req);
        const response = await ProductModal.update(id, body);
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(updateMessage('Product Updated Successfully', response)));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(errorMessage('Unable to get Product invalid ID')));
    }

}
/**
 * @descritpion Delete product based on the id
 * @param req
 * @param res
 * @returns success message or not found
 * @API api/deleteProduct/:id
 * @Method DELETE
 */
 async function deleteProduct(req, res, id) {
    const resultObj = await ProductModal.findById(id);
    if (resultObj) {
        const response = await ProductModal.deleteProduct(id);
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(errorMessage('Product Deleted Successfully')));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(errorMessage('Product not found')));
    }

}
module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}