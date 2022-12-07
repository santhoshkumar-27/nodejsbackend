function getBodyString(req) {
    return new Promise((resolve, reject) => {
        req.on('data', (chunck) => {
            resolve(JSON.parse(chunck.toString()))
        })
    })
}

module.exports = {
    getBodyString,
}