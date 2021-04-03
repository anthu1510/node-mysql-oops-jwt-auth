const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DBNAME
});

con.connect(err => {
    if(err) throw err;
    console.log('Database Connected');
});

module.exports = con;
