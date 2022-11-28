const fs = require('fs');

function writeDataToFile(fileName, content) {
    fs.writeFileSync(fileName, content, 'utf8', (err) => {
        if(err) {
            console.log(err);
        }
    })
}

module.exports = {
    writeDataToFile
}