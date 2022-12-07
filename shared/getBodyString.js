function getBodyString(req) {
    return new Promise((resolve, reject) => {
        try {
            req.on('data', (chunck) => {
                resolve(JSON.parse(chunck.toString()))
            })
        } catch (error) {
            reject(error)
        }
    })
}

function processBody(req, func) {
    return new Promise((resolve, reject) => {
        try {
            req.on('end', () => {
                resolve(func);
            })
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    getBodyString,
    processBody
}