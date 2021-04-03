const mysql = require('mysql');

class Database {
    host;
    user;
    password;
    database;
    con;
    constructor() {
        this.host = process.env.HOST;
        this.user = process.env.USERNAME;
        this.password = process.env.PASSWORD;
        this.database = process.env.DBNAME;
    }

    Connect() {
        this.con = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });

        this.con.connect(err => {
            if(err) throw err;
            console.log('Database Connected');
        });
    }

    static Query(qry, params = []) {
        const ins = new Database();
        ins.Connect();
        return new Promise((resolve, reject) => {
           ins.con.query(qry, params, (err, result, fields) => {
               if(err) throw reject(err);
               resolve(result);
               ins.con.end();
           });
       });
    }
}

module.exports = Database;
