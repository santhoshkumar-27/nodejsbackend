// in create connection we need to create single connection open and close connection
const {
    createConnection, createPool,
} = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const pool = createPool({
    // port: process.env.DBPORT,
    host: process.env.HOST,
    user: process.env.DBUSERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASENAME,
    connectionLimit: 10
})


function sendNativeQuery(query) {
    return new Promise((resolve, reject) => {
        pool.query(query, (error, result) => {
            if (error) {
                reject(error);
            };
            if (result) {
                resolve(result)
            }
        })
    })
}
module.exports = {
    pool,
    sendNativeQuery
}