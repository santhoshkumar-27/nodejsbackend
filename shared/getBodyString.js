function getBodyString(req) {
    return new Promise((resolve, reject) => {
        req.on('data', (chunck) => {
            resolve(JSON.parse(chunck.toString()))
        })
    })
}

function processBody(req, res, func, data) {
    return new Promise((resolve, reject) => {
        req.on('end', () => {
            func(res, data)
        })
    })
}
module.exports = {
    getBodyString,
    processBody
}