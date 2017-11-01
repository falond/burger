// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWDB_URL){
  connection = mysql.createConnection(process.env.JAWDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger_db",
  port: 8889
});
};
// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

connection.connect();
// Export connection for our ORM to use.
module.exports = connection;