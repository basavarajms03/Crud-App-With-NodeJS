const mysql = require('mysql');

var connection  = mysql.createConnection({
    host: 'localhost',
    user: 'phpmyadmin',
    password: 'root',
    database: 'rest_api'
});

connection.connect((err) => {
    if(!err){
        console.log("Database Connection Successfull");
    }else{
        console.log("Failed to connect to mysql connection" + err);
    }
})

module.exports = connection;