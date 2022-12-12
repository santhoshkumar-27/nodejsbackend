const fs = require('fs');

function writeDataToFile(fileName, content) {
    fs.writeFileSync(fileName, content, 'utf8', (err) => {
        if(err) {
            console.log(err);
        }
    })
}
function constructUpdateQuery(payload, model) {
    let query =''
    for (const key in payload) {
        if (!model.hasOwnProperty(key)) {
            return {
                condition: false,
                constructedQuery: 'Invalid Field'
            };
        }
        query += `${key} = `;
        query += typeof payload[key] === 'string' ? 
        `'${payload[key]}'` : typeof payload[key] === 'number' 
        ? `${payload[key]}` : `${payload[key]}`;
    }
    return {
        condition: true,
        constructedQuery: query
    };;
}
module.exports = {
    writeDataToFile,
    constructUpdateQuery
}