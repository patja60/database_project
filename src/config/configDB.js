import mysql from "mysql";
export default mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

// https://stackoverflow.com/questions/43464908/reactjs-connection-with-database/43465998


// var mysql = require('mysql')
// var connection = mysql.createConnection({
// host     : 'localhost',
// user     : 'dbuser',
// password : 's3kreee7',
// database : 'my_db'
// });
//
// connection.connect()
//
// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
// if (err) throw err
//
// console.log('The solution is: ', rows[0].solution)
// })
//
// connection.end()
