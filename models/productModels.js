const products = require('../data/products.json');

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products);
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const resultObj = products.find((product) => product.id === id);
        resolve(resultObj);
    })
}
module.exports = {
    findAll,
    findById
}