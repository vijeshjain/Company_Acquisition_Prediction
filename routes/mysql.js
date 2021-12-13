var ejs = require('ejs');
var mysql = require('mysql');

function getConnection() {
    var connection = mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: '',
        port: 
    });
    return connection;
}

exports.fetchData = function (sqlQuery, callback) {

    console.log("\nSQL Query::" + sqlQuery);

    var connection = getConnection();

    connection.query(sqlQuery, function (err, rows, fields) {

        if (err) {
            console.log("ERROR: " + err.message);
        } else { // return err or result

            callback(err, rows);

        }
    });
    console.log("\nConnection closed..");
    connection.end();
}
