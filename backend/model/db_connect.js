require('dotenv').config();
const mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

console.log(process.env.DB_DATABASE);

// console.log(connection);


module.exports = connection;