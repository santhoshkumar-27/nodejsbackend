// in create connection we need to create single connection open and close connection
const {
    createPool
} = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const pool = createPool({
    host: process.env.HOST,
    user: process.env.user,
    password: process.env.password,
    database: `demoLearning`,
    connectionLimit: 10
})


function sendNativeQuery(query) {
    pool.query(query, (error, result, field) => {
        if (error) {
            return error;
        };
        if (result) {
            return result;
        }
    })
}
module.exports = {
    pool,
    sendNativeQuery
}