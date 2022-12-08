function errorMessage(message) {
    return {
        message
    }
}
function updateMessage(message, data) {
    return {
        message,
        data
    }
}

module.exports = {
    errorMessage,
    updateMessage
}