const mysql = require('mysql');

const dbconfig = {
    host:'localhost',
    user:'root',
    password:'',
    database:'s3'
};

const conn = mysql.createConnection(dbconfig);

module.exports = conn;
