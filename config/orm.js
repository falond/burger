// Import MySQL connection.
var connection = require("../config/connection.js");


// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";







// Object for all our SQL statement functions.

// var orm = {
//   selectAll: function(whatToSelect, tableInput) {
//     var queryString = "SELECT ?? FROM ??";
//     connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
//       if (err) {
//         throw err;
//       }
//       console.log(result);
//     });
//   },
//   insertOne: function(tableInput, colToSearch, valOfCol) {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";

//     console.log(queryString);

//     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//       console.log(result);
//     });
//   },
//   updateOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
//     var queryString = "SELECT ?? FROM ?? AS tOne";
//     queryString += " LEFT JOIN ?? AS tTwo";
//     queryString += " ON tOne.?? = tTwo.??";

//     console.log(queryString);

//     connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
//       err,
//       result
//     ) {
//       console.log(result);
//     });
//   }
// };


















// Export the orm object for the model (burger.js).
module.exports = orm;