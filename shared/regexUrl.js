// const getProdRegex = /\/api\/product\/([0-9]+)/;
// const getProdRegex = /\/api\/product\/([A-z]*[0-9]*[-]*)/;
const getProdRegex = /\/api\/product\/([\d\w -]*)/;
module.exports = {
    getProdRegex
}