const base = '/api'
const productURl = {
    get: `${base}/products`,
    post: `${base}/createProduct`,
    eventStream : `${base}/eventStream`
}
module.exports = {
    productURl
}