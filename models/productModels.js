const products = require('../data/products.json');
const { errorMessage, updateMessage } = require('../shared/errorHandlingfile');
const {v4: uuidv4} = require('uuid');
const { writeDataToFile, constructUpdateQuery } = require('../utils');
const { sendNativeQuery } = require('../database');

 function findAll() {
    return new Promise(async (resolve, reject) => {
        const dbProducts = await sendNativeQuery('SELECT * FROM product');
        resolve(dbProducts);
    })
}

function findById(id) {
    return new Promise(async (resolve, reject) => {
        const dbProducts = await findAll();
        const resultObj = (dbProducts || []).find((product) => product.id == id);
        resolve(resultObj);
    })
}

function create(payload) {
    return new Promise( async(resolve, reject) => {
        const query = `INSERT INTO product (name, description, price) VALUES ('${payload.name}', '${payload.description}', ${payload.price})`
        const dbProducts = await sendNativeQuery(query);
        let product;
        if (dbProducts) {
            product = await sendNativeQuery(`SELECT * FROM product where id = ${dbProducts.insertId}`)[0]
            resolve(product);
        } else {
            reject(errorMessage('Unable to create Product'))
        }
    })
}

function update(id, body) {
    return new Promise(async (resolve, reject) => {
        const {condition , constructedQuery} = constructUpdateQuery(body, model);
        if (condition) {            
            const query = `UPDATE product SET ${constructedQuery} WHERE id = ${id};`;
            const dbProducts = await sendNativeQuery(query);
            let product;
            if (dbProducts) {
                product = await sendNativeQuery(`SELECT * FROM product where id = ${id}`)
                resolve(product);
            } else {
                reject(errorMessage('Unable to update Product'))
            }
        } else {
            reject(errorMessage(constructedQuery));
        }
    })
}
function deleteProduct(id) {
    return new Promise((resolve, reject) => {
        const index = products.findIndex((product) => product.id === id);
        products.splice(index, 1)
        writeDataToFile('./data/products.json', JSON.stringify(products))
        resolve();
    })
}
module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteProduct
}
const model = {
    name: '',
    description: '',
    price: 0
}