// const getProdRegex = /\/api\/product\/([0-9]+)/;
// const getProdRegex = /\/api\/product\/([A-z]*[0-9]*[-]*)/;
const getProdRegex = /\/api\/product\/([\d\w -]*)/;
const updateProdRegex = /\/api\/updateProduct\/([\d\w -]*)/;

module.exports = {
    getProdRegex,
    updateProdRegex
}