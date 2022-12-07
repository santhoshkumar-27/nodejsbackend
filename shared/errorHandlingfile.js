function errorMessage(message) {
    return {
        message : `${message} not found`
    }
}
function updateMessage(message, payload) {
    return {
        message : `${message} updated`, 
        data: payload
    }
}

module.exports = {
    errorMessage,
    updateMessage
}