const products = require('../data/products.json');
const {v4: uuidv4} = require('uuid')

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

function create(payload) {
    return new Promise((resolve, reject) => {
        const newProduct = {
            id: uuidv4(),
            ...payload
        }
        resolve(resultObj);
    })
}
module.exports = {
    findAll,
    findById,
    create
}