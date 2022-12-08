function errorMessage(message) {
    return {
        message
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