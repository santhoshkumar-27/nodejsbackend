function getBodyString(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = '';
            req.on('data', (chunck) => {
                body = JSON.parse(chunck.toString())
            })
            req.on('end', () => {
                resolve(body);
            })
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    getBodyString,
}